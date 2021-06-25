"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TheNewPicture_id, _TheNewPicture_title, _TheNewPicture_orientation, _TheNewAlbum_id, _TheNewAlbum_title, _TheNewAlbum_pictures;
var TheNewPhotoOrientation;
(function (TheNewPhotoOrientation) {
    TheNewPhotoOrientation[TheNewPhotoOrientation["Landscape"] = 0] = "Landscape";
    TheNewPhotoOrientation[TheNewPhotoOrientation["Portrait"] = 1] = "Portrait";
    TheNewPhotoOrientation[TheNewPhotoOrientation["Square"] = 2] = "Square";
    TheNewPhotoOrientation[TheNewPhotoOrientation["Panorama"] = 3] = "Panorama";
})(TheNewPhotoOrientation || (TheNewPhotoOrientation = {}));
;
// A PARTIR DE LA VERSION 3.8 DE TYPESCRIPT SE PUEDE USAR "#" EN VEZ DE "private"
var TheNewPicture = /** @class */ (function () {
    function TheNewPicture(id, title, orientation) {
        _TheNewPicture_id.set(this, void 0);
        _TheNewPicture_title.set(this, void 0);
        _TheNewPicture_orientation.set(this, void 0);
        __classPrivateFieldSet(this, _TheNewPicture_id, id, "f");
        __classPrivateFieldSet(this, _TheNewPicture_title, title, "f");
        __classPrivateFieldSet(this, _TheNewPicture_orientation, orientation, "f");
    }
    //BEHAVIOUR
    TheNewPicture.prototype.toString = function () {
        return "[\n            id: " + __classPrivateFieldGet(this, _TheNewPicture_id, "f") + ",\n            title: " + __classPrivateFieldGet(this, _TheNewPicture_title, "f") + ",\n            orientation: " + __classPrivateFieldGet(this, _TheNewPicture_orientation, "f") + "\n        ]";
    };
    return TheNewPicture;
}());
_TheNewPicture_id = new WeakMap(), _TheNewPicture_title = new WeakMap(), _TheNewPicture_orientation = new WeakMap();
var TheNewAlbum = /** @class */ (function () {
    function TheNewAlbum(id, title) {
        _TheNewAlbum_id.set(this, void 0);
        _TheNewAlbum_title.set(this, void 0);
        _TheNewAlbum_pictures.set(this, void 0);
        __classPrivateFieldSet(this, _TheNewAlbum_id, id, "f");
        __classPrivateFieldSet(this, _TheNewAlbum_title, title, "f");
        __classPrivateFieldSet(this, _TheNewAlbum_pictures, [], "f");
    }
    TheNewAlbum.prototype.addPicture = function (picture) {
        __classPrivateFieldGet(this, _TheNewAlbum_pictures, "f").push(picture);
    };
    return TheNewAlbum;
}());
_TheNewAlbum_id = new WeakMap(), _TheNewAlbum_title = new WeakMap(), _TheNewAlbum_pictures = new WeakMap();
var theAnotherNewAlbum = new TheNewAlbum(1, "My love in Moscu");
var theAnotherNewPucture = new TheNewPicture(1, "I like this city", TheNewPhotoOrientation.Square);
theAnotherNewAlbum.addPicture(theAnotherNewPucture);
console.log("anotherNewAlbum", anotherNewAlbum);
// CAN'T ENTER TO THE private MEMBER
// theAnotherNewPucture.id = 100;
// theAnotherNewPucture.title = "Walking to the street with she";
// theAnotherNewAlbum.title = "The first date was awesome!";
// console.log( "anotherNewAlbum", theAnotherNewAlbum);
