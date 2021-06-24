"use strict";
// VOID TYPE:
// Data type explicit
function showInformation(user /* DECLARACION DE VARIABLES */) {
    console.log("User information", user.id, user.username, user.firstName);
    // return 'Hello!';
}
showInformation({ id: 1, username: "Regulus", firstName: "Regulus" });
// Data type inflicted
function showFormattedInformation(user) {
    // AQUI TAMBIEN SE OMITE EL TIPO DE RETORNO
    var userInfo = "\n        id: " + user.id + "\n        username: " + user.username + "\n        firstName: " + user.firstName + "\n    ";
    console.log('User information', userInfo);
}
showFormattedInformation({ id: 1, username: "Regulus", firstName: "Regulus" });
// DATA TYPE AS VOID TYPE:
var unusable;
unusable: null;
unusable: undefined;
// DATA TYPE AS NEVER TYPE:
function handleError(code, message) {
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, "Not Found");
}
catch (e) {
    console.error(e);
}
function sumNumbers(limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
