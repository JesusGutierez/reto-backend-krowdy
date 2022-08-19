"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoStatusProcess = void 0;
const mongoose_1 = require("mongoose");
const mongo_1 = require("../../databases/mongo");
exports.VideoStatusProcess = {
    INIT: 'inicio',
    END: 'fin',
    ERR: 'error'
};
const TiktokVideoSchemas = new mongoose_1.Schema({
    tiktokId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'TikTok' },
});
const VideoReelSchema = new mongoose_1.Schema({
    lastStatusOfProcess: { type: String, enum: exports.VideoStatusProcess },
    srcLink: { type: String },
    tiktokVideos: [TiktokVideoSchemas]
}, { timestamps: true });
const VideoReelModel = mongo_1.connectDBProcess.model('VideoReels', VideoReelSchema);
exports.default = VideoReelModel;
