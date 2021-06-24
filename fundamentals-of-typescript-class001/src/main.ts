console.log("Hello Typescript World! :D");

//explicit number - data type Explicit
let phone: number;
phone = 987654321;
// phone = "Hello!" //data type error

// inflicted number - data type inflicted
let otherPhone = 987321654;
otherPhone = 123;
// otherPhone = true // data type error

let hex: number = 0xf00d;   //hexadecimal will init with 0x
let binary: number = 0b10101001; // biario will init with 0b
let octal: number = 0o744;  // octadecimal will init with 0o

// Type: boolean
// data type Explicit
let eBool: boolean;
eBool = true;
// eBool = 1    // data type error

// Data type inflicted
let isUserPro = false;
isUserPro = true;
// isUserPro = 10;

// STRING:
let username: string = 'Regulus';
username = 'Ileas';
// username = true;     // Data type error

// Template String
// Use of Back-tick
let userInfo: string;
userInfo = `
    Infomation:
    Username: ${username} 
    firstName: ${username} Ileas's son
    phone: ${phone}
    isUserPro: ${isUserPro}
`;

console.log('User Info', userInfo);