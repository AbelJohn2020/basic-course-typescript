import { Album, PhotoOrientation, Picture, User } from "./modules";

const user = new User(1, "Regulus2021", "Regulus", true);
const album = new Album(10, "Traveling to Russia");
const picture = new Picture(1, "My first day in Moscu", "2024-02-08", PhotoOrientation.Landscape);

//CREAMOS RELACIONES

user.addAlbum(album);
album.addPicture(picture);

console.log("user", user);