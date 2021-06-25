"use strict";
var ThePhotoOrientation;
(function (ThePhotoOrientation) {
    ThePhotoOrientation[ThePhotoOrientation["Landscape"] = 0] = "Landscape";
    ThePhotoOrientation[ThePhotoOrientation["Portrait"] = 1] = "Portrait";
    ThePhotoOrientation[ThePhotoOrientation["Square"] = 2] = "Square";
    ThePhotoOrientation[ThePhotoOrientation["Panorama"] = 3] = "Panorama";
})(ThePhotoOrientation || (ThePhotoOrientation = {}));
;
var ThePicture = /** @class */ (function () {
    function ThePicture(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //BEHAVIOUR
    ThePicture.prototype.toString = function () {
        return "[\n            id: " + this.id + ",\n            title: " + this.title + ",\n            orientation: " + this.orientation + "\n        ]";
    };
    return ThePicture;
}());
var NewAlbum = /** @class */ (function () {
    function NewAlbum(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    NewAlbum.prototype.addPicture = function (picture) {
        this.pictures.push(picture);
    };
    return NewAlbum;
}());
var anotherNewAlbum = new NewAlbum(1, "My love in Moscu");
var anotherNewPucture = new ThePicture(1, "I like this city", ThePhotoOrientation.Square);
anotherNewAlbum.addPicture(anotherNewPucture);
console.log("anotherNewAlbum", anotherNewAlbum);
// ENTER TO THE PUBLIC MEMBER
anotherNewPucture.id = 100;
anotherNewPucture.title = "Walking to the street with she";
anotherNewAlbum.title = "The first date was awesome!";
console.log("anotherNewAlbum", anotherNewAlbum);
