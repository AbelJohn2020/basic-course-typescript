"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modules_1 = require("./modules");
var user = new modules_1.User(1, "Regulus2021", "Regulus", true);
var album = new modules_1.Album(10, "Traveling to Russia");
var picture = new modules_1.Picture(1, "My first day in Moscu", "2024-02-08", modules_1.PhotoOrientation.Landscape);
//CREAMOS RELACIONES
user.addAlbum(album);
album.addPicture(picture);
console.log("user", user);
