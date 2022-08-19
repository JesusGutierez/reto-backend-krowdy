"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const uuid4_1 = __importDefault(require("uuid4"));
class SonyVegasByBootcamp {
    constructor() {
        this.dirVideos = `${__dirname.split('/').slice(0, 5).join('/')}/srcvideos`;
    }
    async ffmpeg(argsFfmpeg) {
        try {
            return new Promise((resolve, reject) => {
                const opts = { shell: true };
                console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 13 ~ SonyVegasByBootcamp ~ ffmpeg ~ argsFfmpeg", argsFfmpeg);
                const child = (0, child_process_1.spawn)('ffmpeg', (argsFfmpeg), opts);
                child.stdout.on('data', (data) => {
                    console.log(`stdout: ${data}`);
                });
                child.stderr.on('data', (data) => {
                    console.error(`stderr: ${data}`);
                });
                child.on('close', (code) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`);
                });
                child.on('error', (code) => {
                    reject(`proceso con errores => ${code}`);
                });
                child.on('message', (code) => {
                    console.log(`this is message from child.on =>`, code);
                });
            });
        }
        catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 43 ~ SonyVegasByBootcamp ~ ffmpeg ~ error", error);
        }
    }
    async cutVideo(nameVideo, startTime, endTime, numberCpusAvailables = 4) {
        try {
            let extensionVideo = '.mp4';
            let videoSource = {
                srcVideo: `${this.dirVideos}/${nameVideo}${extensionVideo}`,
                srcVideoOutput: `${this.dirVideos}/${nameVideo}-${(0, uuid4_1.default)()}${extensionVideo}`
            };
            // ffmpeg -y -i video_5.mp4 -threads 4 -ss 00:00:00 -to 00:00:20 -async 1 video_5_cut.mp4
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 53 ~ SonyVegasByBootcamp ~ cutVideo ~ videoSource", videoSource);
            let args = [
                '-y',
                '-i',
                videoSource?.srcVideo,
                `-threads ${numberCpusAvailables}`,
                `-ss ${startTime}`,
                `-to ${endTime}`,
                '-async 1',
                videoSource?.srcVideoOutput
            ];
            await this.ffmpeg(args);
        }
        catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 67 ~ SonyVegasByBootcamp ~ cutVideo ~ error", error);
            throw error;
        }
    }
    async cutVideos(videoSources) {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    async joinVideos(arrVideos) {
        try {
        }
        catch (error) {
        }
    }
    async addFilterVideos(arrVideos) {
        try {
        }
        catch (error) {
        }
    }
    async addImagesToVideos(arrVideos) {
        try {
        }
        catch (error) {
        }
    }
}
exports.default = new SonyVegasByBootcamp();
