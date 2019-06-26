import { Server, Request, Response, Next } from 'restify';
import urlCore from './../core/url/url';
const validUrl = require("valid-url");
const shortid = require("shortid");
const errorUrl = 'http://localhost/error';
import _ = require('lodash');

export default class UrlClient {

    static ApplyRoutes(server: Server) {

        /**
         * @swagger
         * /test:
         *   get:
         *     tags:
         *       - test
         *     description: This end return the status of api.
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: Api is up and runing.
         *       400:
         *         description: The api is not up running.
         */
        server.get('/test', (req, res, next) => {
            res.send(200, "Api is up and runing.");
            next();
        });

        /**
         * @swagger
         * /code:
         *   get:
         *     tags:
         *       - Redirect to orignal url.
         *     parameters:
         *       - in: path
         *         name: code
         *         schema:
         *           type: string
         *         required: true
         *         description: The code for the orignal url.
         *     description: This end return orignal url.
         *     produces:
         *       - application/json
         *     responses:
         *       200:
         *         description: orignal url.
         *       400:
         *         description: error.
         */
        server.get('/:code', async (req, res, next) => {
            const urlCode = req.params.code;
            const item = await urlCore.FindByCode(urlCode);
            if (!_.isEmpty(item)) {
                res.redirect(301, item.originalUrl, next);
            } else {
                res.redirect(301, errorUrl, next);
            }
        });

         /**
         * @swagger
         * /orignal/{item_code}:
         *   get:
         *     tags:
         *       - orignal
         *     description: get orignal url by code.
         *     produces:
         *       - application/json
         *     parameters:
         *       - in: path
         *         name: item_code
         *         schema:
         *           type: string
         *         required: true
         *         description: Code to retrive orignal url.
         *     responses:
         *       200:
         *         description: orignal url.
         *       400:
         *         description: The url does not exist.
         */
        server.get('/orignal/:item_code', async (req, res, next) => {
            const urlCode = req.params.item_code;
            const item = await urlCore.FindByCode(urlCode);
            if (!_.isEmpty(item)) {
                res.send(200, JSON.stringify({orignal: item.originalUrl}));
                return next();
            } else {
                res.send(404, "The ad does not exist, try adding new instead.");
                return next();
            }
        });

        /**
         * @swagger
         * /item:
         *   post:
         *     tags:
         *       - Url-Shortning item
         *     description: Creates an entry for url shortning in database and genrates a code.
         *     produces:
         *       - application/json
         *     parameters:
         *     - in: "body"
         *       name: "body"
         *       description: "url details"
         *       required: true
         *       schema:
         *          type: "object"
         *          properties:
         *             originalUrl:
         *               type: "string"
         *               description: Orignal url value
         *             shortBaseUrl:
         *               type: "string"
         *               description: Base url of api
         *     responses:
         *       200:
         *         description: Item added in database with shortern url ready.
         *         schema:
         *            type: string
         *       400:
         *         description: item adding failed
         */
        server.post("/item", async (req, res) => {
            const { originalUrl, shortBaseUrl } = req.body;
            if (validUrl.isUri(shortBaseUrl)) {
            } else {
                return res
                    .send(401, "Invalid Base Url");
            }
            const urlCode = shortid.generate();
            const updatedAt = new Date();
            if (validUrl.isUri(originalUrl)) {
                try {
                    const item = await urlCore.FindByOrignal(originalUrl);
                    if (item) {
                        res.send(200, item)
                    } else {
                        const item = await urlCore.Save(shortBaseUrl, urlCode, originalUrl, updatedAt);
                        res.send(200, item);
                    }
                } catch (err) {
                    res.send(401, "Invalid User Id");
                }
            } else {
                return res.send(401, "Invalid Original Url");
            }
        });
    }
}