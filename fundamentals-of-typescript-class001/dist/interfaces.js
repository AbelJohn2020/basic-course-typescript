"use strict";
// Function to show a picture
var ShowPhotoOtientation;
(function (ShowPhotoOtientation) {
    ShowPhotoOtientation[ShowPhotoOtientation["Landscape"] = 0] = "Landscape";
    ShowPhotoOtientation[ShowPhotoOtientation["Portrait"] = 1] = "Portrait";
    ShowPhotoOtientation[ShowPhotoOtientation["Square"] = 2] = "Square";
    ShowPhotoOtientation[ShowPhotoOtientation["Panorama"] = 3] = "Panorama";
})(ShowPhotoOtientation || (ShowPhotoOtientation = {}));
;
function showPicture(picture) {
    var arrPicture = [
        { "title": "" + picture.title },
        { "date": "" + picture.date },
        { "orientation": "" + picture.orientation },
    ];
    console.log("arrPicture", arrPicture);
}
var myPicture = {
    title: "Traveling to Russia <3",
    date: "2024-02-05",
    orientation: ShowPhotoOtientation.Landscape,
};
showPicture({ title: myPicture.title, date: myPicture.date, orientation: myPicture.orientation });
;
function generatePicture(config) {
    var pic = { title: 'Default', date: '2020-01-08' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var pictureI = generatePicture({});
console.log(pictureI);
pictureI = generatePicture({ title: "My day in Moscu", date: "2024-02-08" });
console.log(pictureI);
var userI;
userI = { id: 10, username: "Regulus", isUserPro: true };
console.log("userI", userI);
userI.username = "Regulus2020";
userI.id = 20;
console.log("userI", userI);
