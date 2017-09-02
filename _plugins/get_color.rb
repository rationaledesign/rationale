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
            # if image is empty
            return "transparent"
        else
            flag = 0

            # if cached file exists, check inside to see if the name matches
            if File.file?(filename)
                CSV.foreach(filename) do |row|
                    if row[0] == var && flag == 0
                        flag = 1
                        # return the color if there's a match
                        return row[1]
                    end
                end
            else 
            #else create a new file
                CSV.open(filename, "wb")
            end

            # if nothing was found, get the color from imgix 
            if flag == 0
                uri = URI.parse('https://rationale-design.imgix.net' + var + '?palette=json&colors=2')
                
                # get resource with 5s timeout
                begin
                    http = Net::HTTP.new(uri.host, uri.port)
                    http.use_ssl = true if uri.scheme == 'https'
                    http.read_timeout = 5
                    
                    http.start do
                        request = Net::HTTP::Get.new(uri.request_uri)
                        resp = http.request(request)

                        # parse json
                        # (I'm getting the second main color out of 2 because I found it was more pleasant)
                        json = JSON.parse(resp.body)
                        color = json["colors"][1]["hex"]

                        # cache to color to file
                        CSV.open(filename, "a+b") do |csv|
                            csv << [var, color.to_s]
                        end
                
                        # and return the hex color
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