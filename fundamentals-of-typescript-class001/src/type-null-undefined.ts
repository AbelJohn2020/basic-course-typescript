// DATA TYPE EXPLICIT
// NULL
let nullVariable: null;
nullVariable = null;
// nullVariable = 1; //TYPE ERROR 

let otherVariable = null;
otherVariable = 'test';

console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);

// UNDEFINED
let undefinedVariable: undefined = undefined;
// undefinedVariable = 'test'; // TYPE ERROR
let otherUndefinedVariable = undefined;
otherUndefinedVariable = 1;

console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);

// NULL AND UNDEFINED AS SUBTYPES
// STRICT NULL CHECKS (--strictNullChecks)
let albumName: string;
// albumName = null;
// albumName = undefined;
