require 'net/http'
require 'uri'
require 'json'
require 'csv'

module Jekyll
class GetColorTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
        @markup = markup
        super
        
    end

    def render(context)
        var = context[@markup.strip]
        filename = "cached_colors.csv"

        if var.nil? || var.empty?
            "transparent"
        else
            flag = 0

            if File.file?(filename)
                CSV.foreach(filename) do |row|
                    if row[0] == var && flag == 0
                        flag = 1
                        return row[1]
                    end
                end
            else 
                CSV.open(filename, "wb")
            end

            if flag == 0
                uri = URI.parse('https://rationale-design.imgix.net' + var + '?palette=json&colors=2')
                
                # get json
                begin
                    http = Net::HTTP.new(uri.host, uri.port)
                    http.use_ssl = true if uri.scheme == 'https'
                    http.read_timeout = 5
                    
                    http.start do
                        request = Net::HTTP::Get.new(uri.request_uri)
                        resp = http.request(request)

                        json = JSON.parse(resp.body)
                        color = json["colors"][1]["hex"]

                        CSV.open(filename, "a+b") do |csv|
                            csv << [var, color.to_s]
                        end
                
                        return color.to_s
                    end

                    rescue Timeout::Error => error
                        "transparent"
                end
            end
        end
    end
end
end

Liquid::Template.register_tag('get_color', Jekyll::GetColorTag)