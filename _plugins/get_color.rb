require 'net/http'
require 'uri'
require 'json'

module Jekyll
class GetColorTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
        @markup = markup
        super
        
    end

    def render(context)
        var = context[@markup.strip]
        if var.nil? || var.empty?
            "transparent"
        else
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
            
                    color.to_s
                end

                rescue Timeout::Error => error
                    "transparent"
            end
        end

        
        #response = Net::HTTP.get(uri)
        #json = JSON.parse(res.body)
        #color = res["colors"][0]["hex"]

        #color.to_s
    end
end
end

Liquid::Template.register_tag('get_color', Jekyll::GetColorTag)