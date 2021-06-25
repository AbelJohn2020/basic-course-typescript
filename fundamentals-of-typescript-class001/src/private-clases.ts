enum TheNewPhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

// A PARTIR DE LA VERSION 3.8 DE TYPESCRIPT SE PUEDE USAR "#" EN VEZ DE "private"

class TheNewPicture {
    #id: number;
    #title: string;
    #orientation: TheNewPhotoOrientation;

    public constructor(id: number, title: string, orientation: TheNewPhotoOrientation) {
        this.#id = id;
        this.#title = title;
        this.#orientation = orientation;
    }

    //BEHAVIOUR

    public toString() {
        return `[
            id: ${this.#id},
            title: ${this.#title},
            orientation: ${this.#orientation}
        ]`
    }
}

class TheNewAlbum {
    #id: number;
    #title: string;
    #pictures: TheNewPicture[];

    public constructor(id: number, title: string) {
        this.#id = id;
        this.#title = title;
        this.#pictures = [];
    }

    public addPicture(picture: TheNewPicture) {
        this.#pictures.push(picture);
    }
}

const theAnotherNewAlbum: TheNewAlbum = new TheNewAlbum( 1, "My love in Moscu");
const theAnotherNewPucture: TheNewPicture = new TheNewPicture(1, "I like this city", TheNewPhotoOrientation.Square);
theAnotherNewAlbum.addPicture(theAnotherNewPucture);

console.log( "anotherNewAlbum", anotherNewAlbum);

// CAN'T ENTER TO THE private MEMBER
// theAnotherNewPucture.id = 100;
// theAnotherNewPucture.title = "Walking to the street with she";
// theAnotherNewAlbum.title = "The first date was awesome!";

// console.log( "anotherNewAlbum", theAnotherNewAlbum);