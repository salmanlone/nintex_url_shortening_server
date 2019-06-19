const _ = require('lodash');

const mongoose = require("mongoose");
const validUrl = require("valid-url");
const UrlShorten = mongoose.model("UrlShortens");
const shortid = require("shortid");
const errorUrl = 'http://localhost/error';


export default class URL {
    
    static FindByCode(urlCode: string){
        return UrlShorten.findOne({ urlCode: urlCode });
    }

    static FindByOrignal(urlCode: string){
        return UrlShorten.findOne({ urlCode: urlCode });
    }

    static async Save(shortBaseUrl: any, urlCode: any, originalUrl: any, updatedAt: Date) {
        let shortUrl = shortBaseUrl + "/" + urlCode;
        const item = new UrlShorten({
            originalUrl,
            shortUrl,
            urlCode,
            updatedAt
        });
        await item.save();
        return item;
    }
}