"use strict";
// EXPLICIT TYPE
var idUser; // "any" accepts any type of data 
idUser = 1; // Type number
idUser = '1'; // here the type is changing to type string
console.log('idUser', idUser);
// Data type inflicted
var otherId;
otherId = 1;
otherId = '1';
console.log('otherId', otherId);
var surprise = 'Hello typescript!';
var res = surprise.substring(6);
console.log('res', res);
