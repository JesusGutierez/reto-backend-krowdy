import { spawn } from 'child_process'
import { mkdirSync, existsSync, appendFileSync } from 'fs'
import { join } from 'path'
import { tmpdir } from 'os'
import uuid4 from "uuid4";
var fs = require('fs');

class SonyVegasByBootcamp {
    dirVideos: string;
    constructor(){
        this.dirVideos = `${__dirname.replaceAll('\\', '/').split('/').slice(0,5).join('/')}/srcvideos`
    }
    async ffmpeg(argsFfmpeg: any) {
        try {
            return new Promise((resolve, reject) => {
                const opts = { shell: true }
                
                console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 13 ~ SonyVegasByBootcamp ~ ffmpeg ~ argsFfmpeg", argsFfmpeg)
                const child = spawn('ffmpeg', (argsFfmpeg), opts)
            

                child.stdout.on('data', (data: any) => {
                    console.log(`stdout: ${data}`);
                });

                child.stderr.on('data', (data: any) => {
                    console.error(`stderr: ${data}`);
                });

                child.on('close', (code: any) => {
                    console.log(`child process exited with code ${code}`);
                    resolve(`proceso terminado => ${code}`)
                });

                child.on('error', (code: any) => {
                    reject(`proceso con errores => ${code}`)
                });

                child.on('message', (code: any) => {
                    console.log(`this is message from child.on =>`, code)
                });
            })
        } catch (error) {
        console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 43 ~ SonyVegasByBootcamp ~ ffmpeg ~ error", error)

        }
    }

    async cutVideo(nameVideo: string, startTime: string, endTime: string, numberCpusAvailables = 4) {
        try {
            let extensionVideo = '.mp4'
            let videoSource = {
                srcVideo: `${this.dirVideos}/${nameVideo}${extensionVideo}`,
                srcVideoOutput: `${this.dirVideos}/${nameVideo}-${uuid4()}${extensionVideo}`
            }
            // ffmpeg -y -i video_5.mp4 -threads 4 -ss 00:00:00 -to 00:00:20 -async 1 video_5_cut.mp4
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 53 ~ SonyVegasByBootcamp ~ cutVideo ~ videoSource", videoSource)
            let args = [
                '-y',
                '-i',
                videoSource?.srcVideo,
                `-threads ${numberCpusAvailables}`,
                `-ss ${startTime}`,
                `-to ${endTime}`,
                '-async 1',
                videoSource?.srcVideoOutput
            ]

            await this.ffmpeg(args)
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 67 ~ SonyVegasByBootcamp ~ cutVideo ~ error", error)
            throw error
        }
    }

    async joinVideo(videoNames: any, resulVideo: string) {
        try {
            let extensionVideo = '.mp4';
            let txtVideos = '';
            let videoSource = {
                srcListVideos: `${this.dirVideos}/videosToJoin.txt`,
                srcVideoOutput: `${this.dirVideos}/${resulVideo}-${uuid4()}${extensionVideo}`
            };

            videoNames?.map((name: string) => {
                txtVideos += `file '${name}${extensionVideo}'` + "\r\n"
            });
            console.log('txtVideos', txtVideos);
            fs.writeFile(videoSource.srcListVideos, txtVideos, 'utf-8', function(err: any) {
                if (err) throw err;
                console.log('Done!');
            })

            // ffmpeg -f concat -safe 0 -protocol_whitelist file,http,https,tls,tcp -i videosToJoin.txt -c copy resultado.mp4
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 83 ~ SonyVegasByBootcamp ~ cutVideo ~ videoSource", videoSource)
            let args = [
                '-f',
                'concat',
                '-i',
                videoSource?.srcListVideos,
                videoSource?.srcVideoOutput
            ]

            await this.ffmpeg(args)
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 79 ~ SonyVegasByBootcamp ~ joinVIdeo ~ error", error)
            throw error
        }
    }

    // No funcional
    async blurVideo(nameVideo: string) {
        try {
            let extensionVideo = '.mp4';
            let videoSource = {
                srcListVideos: `${this.dirVideos}/${nameVideo}${extensionVideo}`,
                srcVideoOutput: `${this.dirVideos}/blur-${nameVideo}-${uuid4()}${extensionVideo}`
            };
            /* ffmpeg -i video_5.mp4 -lavfi '[0:v]scale=ih*16/9:-1,boxblur=luma_radius=min(h\,w)/20:luma_power=1:chroma_radius=min(cw\,ch)/20:chroma_power=1[bg];[bg][0:v]overlay=(W-w)/2:(H-h)/2,crop=h=iw*9/16' -vb 800K danceblur.mp4 */
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 83 ~ SonyVegasByBootcamp ~ blurVIdeo ~ videoSource", videoSource)
            let args = [
                '-i',
                "[o:v]scale=ih*16/9:",

            ];
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 108 ~ SonyVegasByBootcamp ~ blurVideo ~ error", error)
            throw error
        }
    }

    async getInfoVideos(themeVideos: string){
        try {
            let extensionVideo = '.mp4';
        } catch (error) {
            console.log("🚀 ~ file: sonyvegas.controller.ts ~ line 108 ~ SonyVegasByBootcamp ~ getInfoVideos ~ error", error)
            throw error;
        }
    }

    async cutVideos(videoSources: any[]) {
        try {
        } catch (error) {
            throw error
        }
    }
    async joinVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
    async addFilterVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
    async addImagesToVideos(arrVideos: any[]) {
        try {

        } catch (error) {

        }
    }
}

export default new SonyVegasByBootcamp()