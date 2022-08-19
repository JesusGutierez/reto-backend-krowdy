"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restify_router_1 = require("restify-router");
const video_controller_1 = __importDefault(require("../controllers/video.controller"));
const router = new restify_router_1.Router();
router.get('/execute', async (req, res) => {
    try {
        await video_controller_1.default.executeProcessToBuildReel();
        return res.json({ success: true, });
    }
    catch (error) {
        return res.json({ succes: false, error: error.stack });
    }
});
router.get('/ffmpeg', async (req, res) => {
    try {
        await video_controller_1.default.testingFfmpeg();
        return res.json({ success: true, });
    }
    catch (error) {
        return res.json({ succes: false, error: error.stack });
    }
});
router.post('/cutvideo', async (req, res) => {
    try {
        const { nameVideo, startTime, endTime, numberCpusAvailables } = req.body;
        console.log("🚀 ~ file: video.routes.ts ~ line 28 ~ router.get ~ nameVideo", nameVideo);
        await video_controller_1.default.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables);
        return res.json({ success: true, });
    }
    catch (error) {
        return res.json({ succes: false, error: error.stack });
    }
});
exports.default = router;
