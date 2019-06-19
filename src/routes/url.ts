import { Server, Request, Response, Next } from 'restify';
import urlCore from './../core/url/url';
const validUrl = require("valid-url");
const shortid = require("shortid");
const errorUrl = 'http://localhost/error';

export default class UrlClient {

    static ApplyRoutes(server: Server) {

        server.get('/', (req, res) => {
            res.send(200);
        });

        server.get('/:code', async (req, res, next) => {
            const urlCode = req.params.code;
            const item = await urlCore.FindByCode(urlCode);
            if (item) {
                console.log(item);
                res.redirect(301, item.originalUrl, next);
            } else {
                res.redirect(301, errorUrl, next);
            }
        });

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