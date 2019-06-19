const mongoose = require("mongoose");
const validUrl = require("valid-url");
const UrlShorten = mongoose.model("UrlShortens");
const shortid = require("shortid");
const errorUrl = 'http://localhost/error';

export default class URL{
    /**
     *
     */
    constructor() {
        
    }

    static findAll() {
        const item = UrlShorten.find({}, function(err, users) {
            var userMap = {};
        
            users.forEach(function(user) {
              userMap[user._id] = user;
            });
        
            if(userMap){
                return userMap;
            }
            return null;
          });
    }
}