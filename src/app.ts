const restify = require('restify');
const models = require('./db/models/urlShortenSchema');
import Routes from "./config/routes";
import bodyParser = require('body-parser');

export default class App{
    
    private server: any;
    constructor() {
        this.server = restify.createServer();
        this.server.use(bodyParser.json());
        Routes.apply(this.server);
    }
    
    public GetServer(){
        return this.server;
    }
}
