// Function to show a picture

enum ShowPhotoOtientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

interface Picture {
    title: string, 
    date: string, 
    orientation: ShowPhotoOtientation,
}

function showPicture (picture: Picture) {
    const arrPicture = [
        {"title": `${picture.title}`},
        {"date": `${picture.date}`},
        {"orientation": `${picture.orientation}`},
    ]
    console.log("arrPicture", arrPicture);
}

let myPicture = {
    title: "Traveling to Russia <3",
    date: "2024-02-05",
    orientation: ShowPhotoOtientation.Landscape,
}

showPicture({title: myPicture.title, date:myPicture.date, orientation: myPicture.orientation});


interface PictureConfig {
    title?: string,
    date?: string,
    orientation?: ShowPhotoOtientation
};

function generatePicture(config: PictureConfig) {
    const pic = { title: 'Default', date: '2020-01-08'};
    if(config.title) {
        pic.title = config.title;
    }
    if(config.date) {
        pic.date = config.date;
    }

    return pic;
}

let pictureI = generatePicture({});
console.log(pictureI);

pictureI = generatePicture({title: "My day in Moscu", date: "2024-02-08"});
console.log(pictureI);


// USER INTERFACE

interface User {
    id: number, // con readonly no se puede cambiar el id ya que es solo lectura
    username: string,
    isUserPro:boolean,
}

let userI: User;

userI = { id: 10, username: "Regulus", isUserPro: true};
console.log("userI", userI);
userI.username = "Regulus2020";
userI.id = 20;
console.log("userI", userI);