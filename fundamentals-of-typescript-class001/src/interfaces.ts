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