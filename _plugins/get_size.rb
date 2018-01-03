require 'net/http'
require 'uri'
require 'json'
require 'csv'
require_relative 'fastimage.rb'

module Jekyll
class GetSizeTag < Liquid::Tag

    def initialize(tag_name, markup, tokens)
        @markup = markup
        super
        
    end

    def render(context)
        var = context[@markup.strip]
        filename = "cached_sizes.csv"

        if var.nil? || var.empty?
            # if image is empty
            return "0"
        else
            flag = 0

            # if cached file exists, check inside to see if the name matches
            if File.file?(filename)
                CSV.foreach(filename) do |row|
                    if row[0] == var && flag == 0
                        flag = 1
                        # return height if there's a match
                        return row[1]
                    end
                end
            else 
            #else create a new file
                CSV.open(filename, "wb")
            end

            # if nothing was found, get the size from imgix 
            if flag == 0
                pixelwidth, pixelheight = FastImage.size('https://rationale-design.imgix.net' + var.strip)
                
                printheight = "56"
                printheight = sprintf("%.4f",(pixelheight.to_f * 100 / pixelwidth.to_f))

                if printheight.match(/\A[-+]?[0-9]+\z/) 
                    # cache size to file
                    CSV.open(filename, "a+b") do |csv|
                        csv << [var, printheight]
                    end

                    return printheight
                else
                    return "56"
                end
            end
        end
    end
end
end

Liquid::Template.register_tag('get_size', Jekyll::GetSizeTag)