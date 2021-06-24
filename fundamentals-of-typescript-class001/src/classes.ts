enum ThePhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

class ThePicture {
    id: number;
    title: string;
    orientation: ThePhotoOrientation;

    constructor(id: number, title: string, orientation: ThePhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    //BEHAVIOUR

    toString() {
        return `[
            id: ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}
        ]`
    }
}

class NewAlbum {
    id: number;
    title: string;
    pictures: ThePicture[];

    constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    addPicture(picture: ThePicture) {
        this.pictures.push(picture);
    }
}

const anotherNewAlbum: NewAlbum = new NewAlbum( 1, "My love in Moscu");
const anotherNewPucture: ThePicture = new ThePicture(1, "I like this city", ThePhotoOrientation.Square);
anotherNewAlbum.addPicture(anotherNewPucture);

console.log( "anotherNewAlbum", anotherNewAlbum);