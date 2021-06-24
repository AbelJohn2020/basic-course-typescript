// CREATE A PHOTO

// function CreatePicture(title, date, size) {

// }

// USAMOS TS Y DEFINIMOS TIPOS PARA PARAMETROS 
type NewSquareSize = "100x100" | "500x500" | "1000x1000";
function CreateNewPicture(title: string, date: string, size: NewSquareSize) {
    console.log("Create pictures using: ", title, date, size);
}
const newSmallPicture: NewSquareSize = "100x100";
const newLargePicture: NewSquareSize = "1000x1000"
CreateNewPicture("Traveling to Russia", "2024-02-05", newSmallPicture);

// PARAMETROS OPCIONALES EN LAS FUNCIONES

function CreateOtherPicture(title?: string, date?: string, size?: NewSquareSize) {
    console.log("Create pictures using: ", title, date, size);
}

CreateOtherPicture("Return to Peru", newSmallPicture);

// FLAT ARRAY FUNCTION

let createSamePicture = (title: string, date: string, size:SquareSize): object => {
    // return {
    //     title: title,
    //     date: date,
    //     size: size,
    // };
    return { title, date, size, }
};

const samePicture = createSamePicture("Traveling to Russia", "2024-02-05", newLargePicture);
console.log("samePicture", samePicture);