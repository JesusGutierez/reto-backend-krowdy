"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongo_1 = require("../../databases/mongo");
const TikTokSchema = new mongoose_1.Schema({
    videoLink: { type: String },
    srcLink: { type: String }
}, { timestamps: true });
const TikTokModel = mongo_1.connectDBProcess.model('TikTok', TikTokSchema);
exports.default = TikTokModel;
