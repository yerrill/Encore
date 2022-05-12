import * as https from "https";
import * as conf from "./config.json";
import Bungie from "./Bungie/Bungie";

const b = new Bungie(conf.bungieAPI);

/*
b.GetPostGameCarnageReport("8237845454").then((v) => {
    console.log(v);
}).catch((e) => {
    console.log(e);
})*/

b.GetDestinyManifest().then((v) => {
    console.log(v);
}).catch((e) => {
    console.log(e);
})