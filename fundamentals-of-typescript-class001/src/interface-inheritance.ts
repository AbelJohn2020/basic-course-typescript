enum SamePhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
}

interface Inheritance {
    id: number;
    title: string;
}

interface Album extends Inheritance {
    // CON extends ES POSIBLE COPIAR LOS ATRIBUTOS DE Inheritance
    description: string;
}

interface OtherPicture extends Inheritance {
    orientation: SamePhotoOrientation;
}

const newAlbum: Album = {
    id: 1,
    title: "Moscu",
    description: "Traveling to the Mother Russia"
}

const newPicture: OtherPicture = {
    id: 1,
    title: "My second day in Moscu",
    orientation: SamePhotoOrientation.Landscape
}

const anotherNewPicture = {} as OtherPicture;
anotherNewPicture.id = 2;
anotherNewPicture.title = "The moon in the night in Moscu";

console.log("newAlbum", newAlbum);
console.log("newPicture", newPicture);
console.log("anotherNewPicture", anotherNewPicture);