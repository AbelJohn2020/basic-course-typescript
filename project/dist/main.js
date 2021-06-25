"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const album_1 = require("./album");
const modules_1 = require("./modules");
const picture_1 = require("./picture");
const user_1 = require("./user");
const user = new user_1.User(1, "Regulus2021", "Regulus", true);
const album = new album_1.Album(10, "Traveling to Russia");
const picture = new picture_1.Picture(1, "My first day in Moscu", "2024-02-08", modules_1.PhotoOrientation.Landscape);
//CREAMOS RELACIONES
user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);
//BORRAMOS ALBUM
user.removeAlbum(album);
console.log("user", user);
