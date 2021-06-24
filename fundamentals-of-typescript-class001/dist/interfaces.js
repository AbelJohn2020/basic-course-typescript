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
