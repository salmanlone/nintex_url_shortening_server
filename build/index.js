"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./db/index");
const app_1 = require("./app");
const PORT = process.env.PORT || 5000;
index_1.default.Connect().then(() => {
    new app_1.default().GetServer().listen(PORT, () => {
        console.log('Listening on port: ' + PORT);
    });
});
//# sourceMappingURL=index.js.map