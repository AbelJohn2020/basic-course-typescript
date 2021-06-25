enum AnotherPhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

// MODIFICADORES DE ACCESO - SON METODOS QUE ME PERMITE CONTROLAR EL ACCESO A CADA UNO DE SUS MIEMBROS (get and set)

// A PARTIR DE LA VERSION 3.8 DE TYPESCRIPT SE PUEDE USAR "#" EN VEZ DE "private"

class TheOtherNewPicture {
    private _id: number;
    private _title: string;
    private _orientation: AnotherPhotoOrientation;

    public constructor(id: number, title: string, orientation: AnotherPhotoOrientation) {
        this._id = id;
        this._title = title;
        this._orientation = orientation;
    }

    // set y get SON LOS METODOS ACCESORES QUE NOS VAN A PERMITIR LEER O CAMBIAR EL ESTADO A LOS MIEMBROS PRIVADOS QUE TENEMOS EN ESTA CLASE.

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: AnotherPhotoOrientation) {
        this._orientation = orientation;
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

class TheOtherNewAlbum {
    private _id: number;
    private _title: string;
    private _pictures: TheOtherNewPicture[];

    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
        this._pictures = [];
    }

    get id() {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    get title() {
        return this._title;
    }

    set title(title: string) {
        this._title = title;
    }

    get pictures() {
        return this._pictures;
    }

    set pictures(pictures: TheOtherNewPicture[]) {
        this._pictures = pictures
    }

    public addPicture(picture: TheOtherNewPicture) {
        this.pictures.push(picture);
    }
}

const otherAlbum: TheOtherNewAlbum = new TheOtherNewAlbum( 1, "My love in Moscu");
const otherPucture: TheOtherNewPicture = new TheOtherNewPicture(1, "I like this city", AnotherPhotoOrientation.Square);
otherAlbum.addPicture(otherPucture);

console.log( "otherAlbum", otherAlbum);

// ENTER TO THE private MEMBER

//AQUI NO HAY ERROR A PESAR QUE SON DE ACCESO PRIVADO, CADA VEZ QUE QUERAMOS LEER EL ESTADO O EL ATRIBUTO DE UN MIEMBRO ESTAMOS USANDO EL METODO get.

console.log( "otherPucture.id", otherPucture.id); // POR EJEMPLO AQUI ESTAMOS INVOCANDO AL METODO get id() PUESTO QUE ESTAMOS EN UN MODO LECTURA, NO ESTAMOS ASIGNANDO UN NUEVO VALOR SINO LEYENDO EL ESTADO ACTUAL.

otherPucture.id = 100; // AQUI ESTAMOS ASIGNANDO UN NUEVO VALOR A UN MIEMBRO PRIVADO, SIN EMBARGO INTERNAMENTE TS ESTA INVOCANDO AL METODO set id() CON EL PARAMETRO IGUAL A 100
otherPucture.title = "Walking to the street with she";
otherAlbum.title = "The first date was awesome!";

console.log( "otherAlbum", otherAlbum);