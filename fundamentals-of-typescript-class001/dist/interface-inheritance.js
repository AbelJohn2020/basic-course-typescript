"use strict";
var SamePhotoOrientation;
(function (SamePhotoOrientation) {
    SamePhotoOrientation[SamePhotoOrientation["Landscape"] = 0] = "Landscape";
    SamePhotoOrientation[SamePhotoOrientation["Portrait"] = 1] = "Portrait";
    SamePhotoOrientation[SamePhotoOrientation["Square"] = 2] = "Square";
    SamePhotoOrientation[SamePhotoOrientation["Panorama"] = 3] = "Panorama";
})(SamePhotoOrientation || (SamePhotoOrientation = {}));
var newAlbum = {
    id: 1,
    title: "Moscu",
    description: "Traveling to the Mother Russia"
};
var newPicture = {
    id: 1,
    title: "My second day in Moscu",
    orientation: SamePhotoOrientation.Landscape
};
var anotherNewPicture = {};
anotherNewPicture.id = 2;
anotherNewPicture.title = "The moon in the night in Moscu";
console.log("newAlbum", newAlbum);
console.log("newPicture", newPicture);
console.log("anotherNewPicture", anotherNewPicture);
