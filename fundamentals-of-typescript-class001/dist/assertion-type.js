"use strict";
// EN LA ASERCION DE TIPOS TS NO REALIZA NINGUN TIPO DE VERIFICACION Y NO AFECTA EN LO ABASOLUTO AL TIEMPO DE EJECUCION DEL CODIGO.
// SYNTACSIS: < > o as
var assertUsername;
assertUsername = "Regulus";
assertUsername = "Ileas";
// SE TIENE UN STRING Y LE PEDIREMOS AL COMPILADOR DE TYPESCRIPT QUE CONFIE EN NOSOTROS.
var message = assertUsername.length > 5 ? "Welcome " + assertUsername : "AssertUsername is too short";
console.log("message", message);
var usernameWithId = "Aspros";
// COMO OPTENER EL USERNAME A PARTIR DE ESTA EXPRESION?
assertUsername = usernameWithId.substring(0, 6);
console.log("assertUsername", assertUsername);
// Sintaxis "as"
message = assertUsername.length > 5 ? "Welcome " + assertUsername + " to the TypeScript World!" : "AssertUsername is too short";
var helloUser;
helloUser = "Hello Gold saints";
assertUsername = helloUser.substring(6);
console.log("assertUsername", assertUsername);
