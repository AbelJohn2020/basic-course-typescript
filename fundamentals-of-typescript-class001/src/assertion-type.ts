// EN LA ASERCION DE TIPOS TS NO REALIZA NINGUN TIPO DE VERIFICACION Y NO AFECTA EN LO ABASOLUTO AL TIEMPO DE EJECUCION DEL CODIGO.
// SYNTACSIS: < > o as

let assertUsername: any;
assertUsername = "Regulus";
assertUsername = "Ileas";

// SE TIENE UN STRING Y LE PEDIREMOS AL COMPILADOR DE TYPESCRIPT QUE CONFIE EN NOSOTROS.
let message: string = (<string>assertUsername).length > 5 ? `Welcome ${assertUsername}` : "AssertUsername is too short";

console.log("message", message);

let usernameWithId: any = "Aspros";
// COMO OPTENER EL USERNAME A PARTIR DE ESTA EXPRESION?
assertUsername = (<string>usernameWithId).substring(0, 6);
console.log("assertUsername", assertUsername);

// Sintaxis "as"
message = (assertUsername as string).length > 5 ? `Welcome ${assertUsername} to the TypeScript World!` : "AssertUsername is too short";

let helloUser: any;
helloUser = "Hello Gold saints";
assertUsername = (helloUser as string).substring(6);

console.log("assertUsername", assertUsername);