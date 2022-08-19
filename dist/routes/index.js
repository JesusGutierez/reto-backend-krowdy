"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_router_1 = require("restify-router");
const video_routes_1 = __importDefault(require("./video.routes"));
const routerInstance = new restify_router_1.Router();
const listOfRouter = new restify_router_1.Router();
listOfRouter.add('/video', video_routes_1.default);
// listOfRouter.add('/tiktok', VideoRoute);
// listOfRouter.add('/youtube', VideoRoute);
// listOfRouter.add('/sonyvegas', VideoRoute);
routerInstance.add('/api/v1', listOfRouter);
exports.default = routerInstance;
