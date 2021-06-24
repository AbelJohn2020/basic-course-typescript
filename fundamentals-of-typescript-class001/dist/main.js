"use strict";
console.log("Hello Typescript World! :D");
//explicit number - data type Explicit
var phone;
phone = 987654321;
// phone = "Hello!" //data type error
// inflicted number - data type inflicted
var otherPhone = 987321654;
otherPhone = 123;
// otherPhone = true // data type error
var hex = 0xf00d; //hexadecimal will init with 0x
var binary = 169; // biario will init with 0b
var octal = 484; // octadecimal will init with 0o
// Type: boolean
// data type Explicit
var eBool;
eBool = true;
// eBool = 1    // data type error
// Data type inflicted
var isUserPro = false;
isUserPro = true;
// isUserPro = 10;
// STRING:
var username = 'Regulus';
username = 'Ileas';
// username = true;     // Data type error
// Template String
// Use of Back-tick
var userInfo;
userInfo = "\n    Infomation:\n    Username: " + username + " \n    firstName: " + username + " Ileas's son\n    phone: " + phone + "\n    isUserPro: " + isUserPro + "\n";
console.log('User Info', userInfo);
