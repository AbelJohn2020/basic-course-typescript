// OBJECT TYPE

let user: object;
user = {}; // Object

user = {
    id: 1,
    username: 'Regulus2021',
    firstName: 'Regulus',
    isUserPro: true,
};

console.log('user', user);

// Object vs object (Clase JS vs tipo en TS)

let myObject = {
    id: 1,
    username: 'Regulus2021',
    firstName: 'Regulus',
    isUserPro: true,
} // CUANDO SE VE ALGO COMO ESTO SIGNIFICA QUE TS ESTA CONSIDERANDO AL TIPO DE NUESTRA VARIABLE COMO UN Obect, COMO UNA INSTANCIA DE LA CLASE Object DE JS

const isinstance = myObject instanceof Object; // CLASE OBJECT DE JS.
console.log(isinstance)

// console.log('user.username', user.username); // object vs typo de clase "Object";
console.log('myObject.name', myObject.username);
