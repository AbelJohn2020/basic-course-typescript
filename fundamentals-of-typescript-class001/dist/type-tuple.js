"use strict";
// [1, 'user'];
var newUser;
newUser = [1, 'Regulus'];
console.log('newUser', newUser);
console.log('username', newUser[1]);
console.log('newUser.length', newUser.length);
console.log('username.length', newUser[1].length);
console.log('id', newUser[0]);
// TUPLAS CON VARIOS VALORES
// id, username, isUserPro
var newUserInformation;
newUserInformation = [2, "Regulus", true];
console.log("newUserInformation", newUserInformation);
// ARREGLO DE TUPLAS
var arrayTuple;
arrayTuple = [];
arrayTuple.push([1, "Shion"]);
arrayTuple.push([2, "Aldebaran"]);
arrayTuple.push([3, "Mani"]);
var newArrayTuple = arrayTuple.sort();
console.log("arrayTuple", arrayTuple);
console.log("newArrayTuple", newArrayTuple);
// USO DE FUNCIONES EN UN ARRAY
// "Manigoldo" ---> "Aspros"
arrayTuple[2][1] = arrayTuple[2][1].concat("goldo");
console.log("arrayTuple", arrayTuple);
console.log("newArrayTuple", newArrayTuple);
