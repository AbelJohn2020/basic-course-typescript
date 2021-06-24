// 10, '10'
let idNewUser: number | string; // EL id PODRA TOMAR VALORES NUMERICOS Y STRINGS (AUNQUE SEA CON EL MISMO NUMERO)
idNewUser = 10;
idNewUser = "10";

// Buscar username dado un ID
function getUserNameById(id: number | string) {
    // codigo
    return "Regulus";
}

getUserNameById(20);
getUserNameById("20");

///////////////////////
// Alias de tipos TS //
///////////////////////

type IdUser = number | string;
type Username = string;

let otherNewUser: IdUser;
otherNewUser = 10;
otherNewUser = "10";

// Buscar username dado un ID
function getOtherUserNameById(id: IdUser): Username {
    // codigo
    return "Regulus";
}

getOtherUserNameById(20);
getOtherUserNameById("20");


/////////////////////
// TIPOS LITERALES //
/////////////////////

// FOTOS DE 100x100, 500x500, 1000x1000
type SquareSize = "100x100" | "500x500" | "1000x1000";
// let smallPicture: SquareSize = "200x200"    // TYPE ERROR
let nextSmallPicture: SquareSize = "100x100";
let mediumPicture: SquareSize = "500x500";
let largePicture: SquareSize = "1000x1000";