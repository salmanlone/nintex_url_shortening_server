const _ = require('lodash');

const mongoose = require("mongoose");
const validUrl = require("valid-url");
const UrlShorten = mongoose.model("UrlShortens");
const shortid = require("shortid");
const errorUrl = 'http://localhost/error';


export default class URL {
    /**
     *
     */
    constructor() {

    }

    static findAll() {
        const item = UrlShorten.find({}, function (err, allUrl) {

            console.log(allUrl);
            // if(!_.isEnpty(allUrl)){
            //     console.log('data is not empty!');
            // }
                return allUrl;
        });
    }
}