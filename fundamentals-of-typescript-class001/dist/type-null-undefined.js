"use strict";
// DATA TYPE EXPLICIT
// NULL
var nullVariable;
nullVariable = null;
// nullVariable = 1; //TYPE ERROR 
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otherVariable', otherVariable);
// UNDEFINED
var undefinedVariable = undefined;
// undefinedVariable = 'test'; // TYPE ERROR
var otherUndefinedVariable = undefined;
otherUndefinedVariable = 1;
console.log('undefinedVariable', undefinedVariable);
console.log('otherUndefinedVariable', otherUndefinedVariable);
// NULL AND UNDEFINED AS SUBTYPES
// STRICT NULL CHECKS (--strictNullChecks)
var albumName;
// albumName = null;
// albumName = undefined;
