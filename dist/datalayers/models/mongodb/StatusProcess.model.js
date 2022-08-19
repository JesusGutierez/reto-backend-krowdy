"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongo_1 = require("../../databases/mongo");
const VideoReel_model_1 = require("./VideoReel.model");
const StatusProcessSchema = new mongoose_1.Schema({
    statusOfProcess: { type: String, enum: VideoReel_model_1.VideoStatusProcess }
}, { timestamps: true });
const StatusProcessModel = mongo_1.connectDBProcess.model('StatusProcess', StatusProcessSchema);
exports.default = StatusProcessModel;
