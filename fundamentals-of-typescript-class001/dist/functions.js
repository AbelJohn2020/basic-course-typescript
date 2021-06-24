"use strict";
// CREATE A PHOTO
function CreateNewPicture(title, date, size) {
    console.log("Create pictures using: ", title, date, size);
}
var newSmallPicture = "100x100";
var newLargePicture = "1000x1000";
CreateNewPicture("Traveling to Russia", "2024-02-05", newSmallPicture);
// PARAMETROS OPCIONALES EN LAS FUNCIONES
function CreateOtherPicture(title, date, size) {
    console.log("Create pictures using: ", title, date, size);
}
CreateOtherPicture("Return to Peru", newSmallPicture);
// FLAT ARRAY FUNCTION
var createSamePicture = function (title, date, size) {
    // return {
    //     title: title,
    //     date: date,
    //     size: size,
    // };
    return { title: title, date: date, size: size, };
};
var samePicture = createSamePicture("Traveling to Russia", "2024-02-05", newLargePicture);
console.log("samePicture", samePicture);
