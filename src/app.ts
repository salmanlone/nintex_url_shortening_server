const restify = require('restify');
const models = require('./db/models/urlShortenSchema');
import Routes from "./config/routes";
import bodyParser = require('body-parser');
var restifySwaggerJsdoc = require('restify-swagger-jsdoc');
import * as corsMiddleware from "restify-cors-middleware";

const cors = corsMiddleware({
    origins: ["*"],
    allowHeaders: ["Authorization"],
    exposeHeaders: ["Authorization"]
});

export default class App {

    private server: any;

    constructor() {
        this.server = restify.createServer();
        this.server.use(bodyParser.json());
        this.server.pre(cors.preflight);
        this.server.use(cors.actual);
        Routes.apply(this.server);
        this.server.use(
            bodyParser.urlencoded({
                extended: true
            }));
    }

    public GetServer() {
        return this.server;
    }
}