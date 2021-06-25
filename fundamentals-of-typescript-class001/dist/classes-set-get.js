"use strict";
var AnotherPhotoOrientation;
(function (AnotherPhotoOrientation) {
    AnotherPhotoOrientation[AnotherPhotoOrientation["Landscape"] = 0] = "Landscape";
    AnotherPhotoOrientation[AnotherPhotoOrientation["Portrait"] = 1] = "Portrait";
    AnotherPhotoOrientation[AnotherPhotoOrientation["Square"] = 2] = "Square";
    AnotherPhotoOrientation[AnotherPhotoOrientation["Panorama"] = 3] = "Panorama";
})(AnotherPhotoOrientation || (AnotherPhotoOrientation = {}));
;
// MODIFICADORES DE ACCESO - SON METODOS QUE ME PERMITE CONTROLAR EL ACCESO A CADA UNO DE SUS MIEMBROS (get and set)
// A PARTIR DE LA VERSION 3.8 DE TYPESCRIPT SE PUEDE USAR "#" EN VEZ DE "private"
var TheOtherNewPicture = /** @class */ (function () {
    function TheOtherNewPicture(id, title, orientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }
    Object.defineProperty(TheOtherNewPicture.prototype, "id", {
        // set y get SON LOS METODOS ACCESORES QUE NOS VAN A PERMITIR LEER O CAMBIAR EL ESTADO A LOS MIEMBROS PRIVADOS QUE TENEMOS EN ESTA CLASE.
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TheOtherNewPicture.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TheOtherNewPicture.prototype, "orientation", {
        get: function () {
            return this._orientation;
        },
        set: function (orientation) {
            this._orientation = orientation;
        },
        enumerable: false,
        configurable: true
    });
    //BEHAVIOUR
    TheOtherNewPicture.prototype.toString = function () {
        return "[\n            id: " + this.id + ",\n            title: " + this.title + ",\n            orientation: " + this.orientation + "\n        ]";
    };
    return TheOtherNewPicture;
}());
var TheOtherNewAlbum = /** @class */ (function () {
    function TheOtherNewAlbum(id, title) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }
    Object.defineProperty(TheOtherNewAlbum.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TheOtherNewAlbum.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TheOtherNewAlbum.prototype, "pictures", {
        get: function () {
            return this._pictures;
        },
        set: function (pictures) {
            this._pictures = pictures;
        },
        enumerable: false,
        configurable: true
    });
    TheOtherNewAlbum.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return TheOtherNewAlbum;
}());
var otherAlbum = new TheOtherNewAlbum(1, "My love in Moscu");
var otherPucture = new TheOtherNewPicture(1, "I like this city", AnotherPhotoOrientation.Square);
otherAlbum.addPicture(otherPucture);
console.log("otherAlbum", otherAlbum);
// ENTER TO THE private MEMBER
//AQUI NO HAY ERROR A PESAR QUE SON DE ACCESO PRIVADO, CADA VEZ QUE QUERAMOS LEER EL ESTADO O EL ATRIBUTO DE UN MIEMBRO ESTAMOS USANDO EL METODO get.
console.log("otherPucture.id", otherPucture.id); // POR EJEMPLO AQUI ESTAMOS INVOCANDO AL METODO get id() PUESTO QUE ESTAMOS EN UN MODO LECTURA, NO ESTAMOS ASIGNANDO UN NUEVO VALOR SINO LEYENDO EL ESTADO ACTUAL.
otherPucture.id = 100; // AQUI ESTAMOS ASIGNANDO UN NUEVO VALOR A UN MIEMBRO PRIVADO, SIN EMBARGO INTERNAMENTE TS ESTA INVOCANDO AL METODO set id() CON EL PARAMETRO IGUAL A 100
otherPucture.title = "Walking to the street with she";
otherAlbum.title = "The first date was awesome!";
console.log("otherAlbum", otherAlbum);
