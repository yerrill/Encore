import { details } from "./BungieTypes";

export class Destiny2 {
    constructor() {

    }

    public GetDestinyManifest(): details {
        return {
            endpoint: "/Destiny2/Manifest/",
            method: 'GET'
        } as details;
    }

    public GetPostGameCarnageReport(activityId: string): details {
        return {
            endpoint: `/Destiny2/Stats/PostGameCarnageReport/${activityId}/`,
            method: 'GET'
        } as details;
    }
}