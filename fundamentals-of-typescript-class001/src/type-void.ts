// VOID TYPE:

// Data type explicit
function showInformation(user: any /* DECLARACION DE VARIABLES */): any /* DECLARACION DE FUNCIONES */ {
    console.log("User information", user.id, user.username, user.firstName);    
    // return 'Hello!';
}

showInformation({ id: 1, username: "Regulus", firstName: "Regulus" });

// Data type inflicted
function showFormattedInformation(user: any) /* SE OMITE LA DECLARACION FUNCIONAL PORQUE ES IMPLICITA */ {
    // AQUI TAMBIEN SE OMITE EL TIPO DE RETORNO
    const userInfo:string = `
        id: ${user.id}
        username: ${user.username}
        firstName: ${user.firstName}
    `; 
    console.log('User information', userInfo);
}

showFormattedInformation({ id: 1, username: "Regulus", firstName: "Regulus" });

// DATA TYPE AS VOID TYPE:

let unusable: void;
unusable: null;
unusable: undefined;

// DATA TYPE AS NEVER TYPE:

function handleError(code: number, message: string) {
    throw new Error(`${message}. Code: ${code}`);
}

try {
    handleError(404, "Not Found");
} catch(e) {
    console.error(e);
}


function sumNumbers(limit: number): never  /* TIPO DE RETORNO NEVER*/{
    let sum = 0;
    while(true) {
        sum++;
    }
}

sumNumbers(10);