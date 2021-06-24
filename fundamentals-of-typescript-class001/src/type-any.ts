// EXPLICIT TYPE

let idUser: any; // "any" accepts any type of data 
idUser = 1; // Type number
idUser = '1'; // here the type is changing to type string

console.log('idUser', idUser);

// Data type inflicted
let otherId;
otherId = 1;
otherId = '1';

console.log('otherId', otherId);

let surprise: any = 'Hello typescript!';
const res = surprise.substring(6);

console.log('res', res)