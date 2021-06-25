"use strict";
// CUANDO UNA SUPERCLASE LLEGA A SER DEMACIADO GENERAL Y QUEREMOS EVITAR CREAR INSTANCIAS A PARTIR DE LA MISMA PODEMOS UTILIZAR EL CONCEPTO DE CLASE ABSTRACTA
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NewAnotherPhotoOrientation;
(function (NewAnotherPhotoOrientation) {
    NewAnotherPhotoOrientation[NewAnotherPhotoOrientation["Landscape"] = 0] = "Landscape";
    NewAnotherPhotoOrientation[NewAnotherPhotoOrientation["Portrait"] = 1] = "Portrait";
    NewAnotherPhotoOrientation[NewAnotherPhotoOrientation["Square"] = 2] = "Square";
    NewAnotherPhotoOrientation[NewAnotherPhotoOrientation["Panorama"] = 3] = "Panorama";
})(NewAnotherPhotoOrientation || (NewAnotherPhotoOrientation = {}));
;
//SUPER CLASS
//SE COLOCA ABSTRACT PARA NO CREAR MAS OBJETOS DESDE ESTA SUPER CLASE
var Item = /** @class */ (function () {
    function Item(id, title) {
        this._id = id;
        this._title = title;
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    return Item;
}());
var TheOtherPicture = /** @class */ (function (_super) {
    __extends(TheOtherPicture, _super);
    function TheOtherPicture(id, title, orientation) {
        var _this = _super.call(this, id, title) || this;
        _this._orientation = orientation;
        return _this;
    }
    Object.defineProperty(TheOtherPicture.prototype, "orientation", {
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
    TheOtherPicture.prototype.toString = function () {
        return "[\n            id: " + this.id + ",\n            title: " + this.title + ",\n            orientation: " + this.orientation + "\n        ]";
    };
    TheOtherPicture.NewAnotherPhotoOrientation = NewAnotherPhotoOrientation;
    return TheOtherPicture;
}(Item));
var TheOtherAlbum = /** @class */ (function (_super) {
    __extends(TheOtherAlbum, _super);
    function TheOtherAlbum(id, title) {
        var _this = _super.call(this, id, title) || this;
        _this._pictures = [];
        return _this;
    }
    Object.defineProperty(TheOtherAlbum.prototype, "pictures", {
        get: function () {
            return this._pictures;
        },
        set: function (pictures) {
            this._pictures = pictures;
        },
        enumerable: false,
        configurable: true
    });
    TheOtherAlbum.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return TheOtherAlbum;
}(Item));
var theAlbum = new TheOtherAlbum(1, "My love in Moscu");
var thePucture = new TheOtherPicture(1, "I like this city", NewAnotherPhotoOrientation.Square);
theAlbum.addPicture(thePucture);
console.log("theAlbum", theAlbum);
console.log("thePucture.id", thePucture.id); // POR EJEMPLO AQUI ESTAMOS INVOCANDO AL METODO get id() PUESTO QUE ESTAMOS EN UN MODO LECTURA, NO ESTAMOS ASIGNANDO UN NUEVO VALOR SINO LEYENDO EL ESTADO ACTUAL.
//AQUI PODEMOS VER COMO ACCEDER A MIEMBROS DE LAS CLASES MEDIANTE INSTANCIAS (OBJETOS)
thePucture.id = 100; // AQUI ESTAMOS ASIGNANDO UN NUEVO VALOR A UN MIEMBRO PRIVADO, SIN EMBARGO INTERNAMENTE TS ESTA INVOCANDO AL METODO set id() CON EL PARAMETRO IGUAL A 100
thePucture.title = "Walking to the street with she";
theAlbum.title = "The first date was awesome!";
console.log("theAlbum", theAlbum);
//  const item = new Item(1, "Traveling with my wife to Spain");
//  console.log("item", item)
//PROVANDO EL MIEMBRO ESTATICO DE LA LINEA 40  ( SIN USAR INSTANCIAS)
console.log("TheOtherPicture", TheOtherPicture.NewAnotherPhotoOrientation.Landscape); //ESTAMOS ACCEDIENDO A UN MIEMBRO POR MEDIO DE LA CLASE
