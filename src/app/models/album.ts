import { Track } from "./track";

export class Album {
    constructor(public name:string,public releaseDate:Date,public coverImage:string,public tracks: Track[] ) {
        
    }
}