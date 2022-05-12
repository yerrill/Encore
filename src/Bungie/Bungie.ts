import { ClientRequest } from "node:http";
import * as https from "node:https";
import * as types from "./BungieTypes";

export default class Bungie {
    private key;

    constructor(APIkey: string) {
        this.key = APIkey;
    }

    private async request(connectionDetails: types.details): Promise<types.generic> {

        const endpoint: string = connectionDetails.endpoint;
        const method: string = connectionDetails.method;

        const prom: Promise<types.generic> = new Promise<types.generic>((resolve, reject) => {

            const httpsReq: ClientRequest = https.request({  // Make request to Bungie API
                host: "www.bungie.net",
                path: `/Platform${endpoint}`,
                port: 443,
                method: method,
                headers: {
                    'X-API-Key': this.key
                }
            } as https.RequestOptions, (req) => {

                var buffer: any[] = [];
                var result: types.generic;

                req.on('data', (d) => { // On data receive
                    buffer.push(d);
                })

                req.on('end', () => {   // On end of stream
                    try {   // try cast to generic response, resolve promise
                        result = JSON.parse(Buffer.concat(buffer).toString("utf-8")) as types.generic;
                        resolve(result);
                    } catch(e) {    // Catch error in casting, reject promise
                        reject(e);
                        console.log(`Error thrown in Bungie API: Converting respose to generic - ${e}`);
                    }
                })
            })

            httpsReq.on('error', (e) => {    // On stream error, reject promise
                console.log(`Error thrown in Bungie API: Error in connection - ${e}`);
                reject(e);
            })

            httpsReq.end();
        })

        return prom;
    }

    
}