const restify = require('restify');
const models = require('./db/models/urlShortenSchema');
import Routes from "./config/routes";
import bodyParser = require('body-parser');
var restifySwaggerJsdoc = require('restify-swagger-jsdoc');

export default class App {

    private server: any;
    constructor() {
        this.server = restify.createServer();
        this.server.use(bodyParser.json());
        Routes.apply(this.server);
        this.server.use(
            bodyParser.urlencoded({
                extended: true
            }));
        // restifySwaggerJsdoc.createSwaggerPage({
        //     title: 'API documentation', // Page title
        //     version: '1.0.0', // Server version
        //     server: this.server, // Restify server instance created with restify.createServer()
        //     path: '/docs/swagger' // Public url where the swagger page will be available
        // });
    }

    public GetServer() {
        return this.server;
    }
}