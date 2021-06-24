"use strict";
// Orientacion para fotografias 
// const landscape = 0;
// const portrait = 1;
// const square = 3;
// const panorama = 4;
//enum ES UNA PALABRA RESERVADA
var PhotoOtientation;
(function (PhotoOtientation) {
    PhotoOtientation[PhotoOtientation["Landscape"] = 0] = "Landscape";
    PhotoOtientation[PhotoOtientation["Portrait"] = 1] = "Portrait";
    PhotoOtientation[PhotoOtientation["Square"] = 2] = "Square";
    PhotoOtientation[PhotoOtientation["Panorama"] = 3] = "Panorama";
})(PhotoOtientation || (PhotoOtientation = {}));
var landscape = PhotoOtientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOtientation[landscape]);
var PictureOtientation;
(function (PictureOtientation) {
    PictureOtientation[PictureOtientation["Landscape"] = 10] = "Landscape";
    PictureOtientation[PictureOtientation["Portrait"] = 11] = "Portrait";
    PictureOtientation[PictureOtientation["Square"] = 12] = "Square";
    PictureOtientation[PictureOtientation["Panorama"] = 13] = "Panorama";
})(PictureOtientation || (PictureOtientation = {}));
var landscapePictureOrientation = PictureOtientation.Portrait;
console.log('landscapePictureOrientation', landscapePictureOrientation);
console.log('landscapePictureOrientation', PictureOtientation[landscapePictureOrientation]);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["Peru"] = "pe";
    Country["EEUU"] = "usa";
    Country["Espa\u00F1a"] = "esp";
})(Country || (Country = {}));
var country = Country.Peru;
console.log("country", country);
