// ARRAY TYPE

// EXPLICIT TYPE
let users: string[];
users = ["Ilea's son", "Regulus", "Regulus2021"];
// users = [1, true, 'test']; // TYPE ERROR


// INFLICTED TYPE
let otherUsers = ["Ilea's son", "Regulus", "Regulus2021"];
// otherUsers = [1, true, 'test']; // TYPE ERROR

// Array<TIPO>
let pictureTitles: Array<string>;
pictureTitles = ["The lost canvas", "Saint seiya", "Next Dimention"];

// ACCEDIENDO A LOS VALORES EN UN ARRAY

console.log("users", users[0]);
console.log("otherUsers", otherUsers[0]);
console.log("pictureTitle", pictureTitles[0]);

// PROPIEDADES EN UN ARRAY
console.log('users.length', users.length);

// USO DE FUNCIONES EN ARRAYS

users.push("Gold Saints");
users.sort();

console.log('users', users);