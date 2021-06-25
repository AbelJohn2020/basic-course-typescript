import { Album } from "./album";
import { PhotoOrientation } from "./modules";
import { Picture } from "./picture";
import { User } from "./user";

const user = new User(1, "Regulus2021", "Regulus", true);
const album = new Album(10, "Traveling to Russia");
const picture = new Picture(1, "My first day in Moscu", "2024-02-08", PhotoOrientation.Landscape);

//CREAMOS RELACIONES

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);

//BORRAMOS ALBUM
user.removeAlbum(album);
console.log("user", user);