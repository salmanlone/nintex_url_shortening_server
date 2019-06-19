import { Server, Request, Response, Next } from 'restify';
import urlCore from './../core/url/url';
import _ = require('lodash');

export default class Ad {

    static ApplyRoutes(server: Server) {

        server.get('/', (req, res) => {
            res.send(200);
        });

        server.get('/items', function create(req: Request, res: Response, next: Next) {
            res.send(urlCore.findAll());
            return next();
        });

        server.get('/item/:url_code', function create(req: Request, res: Response, next: Next) {
            //let foundAd = ModelAd.findOne(req.params.url_code);

            // if (!_.isNull(foundAd)) {
            //     res.json(foundAd);
            //     return next();
            // }

            res.send(404, "The url does not exist, try adding new instead?");
            return next();
        });
    }
}