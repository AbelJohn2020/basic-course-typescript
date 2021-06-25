import { Item } from "./item";
import { PhotoOrientation } from "./modules";

export class Picture extends Item{
    constructor(id: number, title: string, private _date: string, private _orientation: PhotoOrientation) {
        super(id, title);
    }

    toString(): string {
        return `[
            id: ${this.id},
            title: ${this.title},
            date: ${this._date},
            ortientarion: ${this._orientation},
        ]`
    }
}