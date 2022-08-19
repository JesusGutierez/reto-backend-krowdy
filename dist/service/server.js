"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const restify_1 = __importDefault(require("restify"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("../routes"));
const restify_cors_middleware2_1 = __importDefault(require("restify-cors-middleware2"));
const server = restify_1.default.createServer({
    name: process.env.SERVICE_NAME || 'service-name',
    version: process.env.SERVICE_VERSION || '1.0.0',
});
exports.server = server;
server.use((0, morgan_1.default)('dev'));
const cors = (0, restify_cors_middleware2_1.default)({
    allowHeaders: ['X-XSRF-TOKEN', 'Authorization',],
    credentials: true,
    exposeHeaders: [],
    origins: ['http://localhost:3000'],
});
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify_1.default.plugins.acceptParser(server.acceptable));
server.use(restify_1.default.plugins.queryParser()); // query -> frontend -> STRING -> JSON.parse(query)
server.use(restify_1.default.plugins.bodyParser()); // body -> frontend -> STRING -> JSON.parse(body)
server.get('/public/*', // don't forget the `/*`
restify_1.default.plugins.serveStaticFiles('images'));
routes_1.default.applyRoutes(server);
