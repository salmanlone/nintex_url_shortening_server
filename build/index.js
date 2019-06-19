var restify = require('restify');
let serverPort = process.env.PORT || 7000;
var server = restify.createServer();
server.get('/', (req, res) => {
    res.send('Hello World!');
});
server.listen(serverPort, function () {
    console.log(`${server.name} listening at ${server.url}`);
});
//# sourceMappingURL=index.js.map