"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VideoReel_model_1 = __importStar(require("../datalayers/models/mongodb/VideoReel.model"));
const sonyvegas_controller_1 = __importDefault(require("./sonyvegas.controller"));
class VideoController {
    async testingFfmpeg() {
        try {
            await sonyvegas_controller_1.default.ffmpeg({});
        }
        catch (error) {
            throw error;
        }
    }
    async executeProcessToBuildReel() {
        const videoId = null;
        try {
            // al iniciar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoReel_model_1.VideoStatusProcess.INIT
            });
            // al finalizar proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoReel_model_1.VideoStatusProcess.END
            });
        }
        catch (error) {
            // al obtener error en el proceso
            await this.setStatusOfVideo({
                videoId: videoId,
                status: VideoReel_model_1.VideoStatusProcess.ERR
            });
            throw error;
        }
    }
    async getStatusOfProcess({}) {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    async setStatusOfVideo({}) {
    }
    async createVideoReel() {
    }
    async updateData() {
        let dateUpdate = new Date();
        const updateData = await VideoReel_model_1.default.findOneAndUpdate({
            _id: "62f302a0f9027c96dda81aa6"
        }, {
            $set: {
                srcLink: 'https://google.com',
                updatedAt: dateUpdate
            }
        });
    }
    async createData() {
        let dateUpdate = new Date();
        const updateData = await VideoReel_model_1.default.insertMany([{
                srcLink: 'https://google.com',
                createdAt: new Date()
            }]);
    }
    async cutVideo(nameVideo, startTime, endTime, numberCpusAvailables) {
        try {
            await sonyvegas_controller_1.default.cutVideo(nameVideo, startTime, endTime, numberCpusAvailables);
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new VideoController();
