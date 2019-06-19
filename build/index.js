var restify = require('restify');
let serverPort = process.env.PORT || 7000;
var server = restify.createServer();
server.get('/', (req, res) => {
    res.send(200);
});
server.listen(serverPort, function () {
    console.log(`${server.name} listening at ${server.url}`);
});
module.exports = server;
//# sourceMappingURL=index.js.map