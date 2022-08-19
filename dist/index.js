"use strict";
// /* import 'dotenv/config'; */
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./service/server");
server_1.server.listen(process.env.PORT, () => {
    // const URI_MONGODB ='mongodb://localhost:27017/videos?authSource=admin';
    // server.listen(URI_MONGODB, () => {
    console.log('%s listening at %s', server_1.server.name, server_1.server.url);
});
