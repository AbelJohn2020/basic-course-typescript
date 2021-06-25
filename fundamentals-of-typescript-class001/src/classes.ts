enum ThePhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

class ThePicture {
    public id: number;
    public title: string;
    public orientation: ThePhotoOrientation;

    public constructor(id: number, title: string, orientation: ThePhotoOrientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }

    //BEHAVIOUR

    public toString() {
        return `[
            id: ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}
        ]`
    }
}

class NewAlbum {
    public id: number;
    public title: string;
    public pictures: ThePicture[];

    public constructor(id: number, title: string) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }

    public addPicture(picture: ThePicture) {
        this.pictures.push(picture);
    }
}

const anotherNewAlbum: NewAlbum = new NewAlbum( 1, "My love in Moscu");
const anotherNewPucture: ThePicture = new ThePicture(1, "I like this city", ThePhotoOrientation.Square);
anotherNewAlbum.addPicture(anotherNewPucture);

console.log( "anotherNewAlbum", anotherNewAlbum);

// ENTER TO THE PUBLIC MEMBER
anotherNewPucture.id = 100;
anotherNewPucture.title = "Walking to the street with she";
anotherNewAlbum.title = "The first date was awesome!";

console.log( "anotherNewAlbum", anotherNewAlbum);