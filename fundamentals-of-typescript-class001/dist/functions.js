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
function newHandleError(code, message) {
    if (message === "error") {
        throw new Error(message + ". Code error: " + code);
    }
    else {
        return "An error has occurred";
    }
}
try {
    var result = newHandleError(200, "OK");
    console.log("result", result);
    var otherResult = newHandleError(400, "error");
    console.log("otherResult", otherResult);
}
catch (e) {
    console.log(e);
}
