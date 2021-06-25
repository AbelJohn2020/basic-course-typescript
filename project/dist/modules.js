"use strict";
//EL PRINCIPIO DE RESPONSABILIDAD UNICA, VAMOS A PROCEDER A FRAGMENTAR ESTE FILE, LO CUAL SIGNIFICA CREAR UN ARCHIVO CON PROPOSITO UNICO, ES DECIR UN ARCHIVO PO CADA UNA DE LAS CLASES.
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoOrientation = void 0;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation = exports.PhotoOrientation || (exports.PhotoOrientation = {}));
