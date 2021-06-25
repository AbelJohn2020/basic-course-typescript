// CUANDO UNA SUPERCLASE LLEGA A SER DEMACIADO GENERAL Y QUEREMOS EVITAR CREAR INSTANCIAS A PARTIR DE LA MISMA PODEMOS UTILIZAR EL CONCEPTO DE CLASE ABSTRACTA

enum NewAnotherPhotoOrientation {
    Landscape,
    Portrait,
    Square,
    Panorama,
};

//SUPER CLASS

//SE COLOCA ABSTRACT PARA NO CREAR MAS OBJETOS DESDE ESTA SUPER CLASE
abstract class Item {       // PARA TS SIGNIFICA QUE NINGUN CASO PODEMOS PROVEHER LA CREACION DE OBJETOS A PARTIR DE LA MISMA
    // PARA EVITAR CAMBIAR LOS VALORES DE ESTOS MIEMBROS ENTONCES SE DEBE AGREGAR EL ATRIBUTO readonly EN CONSECUENCIA DEJARIA DE FUNCIONAR EL METODO set PORQUE SET MODIFICA LOS MIEMBROS

    // protected readonly _id: number;
    // protected readonly _title: string;

    protected _id: number;
    protected _title: string;
    
    public constructor(id: number, title: string) {
        this._id = id;
        this._title = title;
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
}

class TheOtherPicture extends Item{
    public static NewAnotherPhotoOrientation = NewAnotherPhotoOrientation;
    private _orientation: NewAnotherPhotoOrientation;

    public constructor(id: number, title: string, orientation: NewAnotherPhotoOrientation) {
        super(id, title);
        this._orientation = orientation;
    }

    get orientation() {
        return this._orientation;
    }

    set orientation(orientation: NewAnotherPhotoOrientation) {
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

class TheOtherAlbum extends Item{
    private _pictures: TheOtherPicture[];

    public constructor(id: number, title: string) {
        super(id, title);
        this._pictures = [];
    }

    get pictures() {
        return this._pictures;
    }

    set pictures(pictures: TheOtherPicture[]) {
        this._pictures = pictures
    }

    public addPicture(picture: TheOtherPicture) {
        this.pictures.push(picture);
    }
}

const theAlbum: TheOtherAlbum = new TheOtherAlbum( 1, "My love in Moscu");
const thePucture: TheOtherPicture = new TheOtherPicture(1, "I like this city", NewAnotherPhotoOrientation.Square);
theAlbum.addPicture(thePucture);

console.log( "theAlbum", theAlbum);

console.log( "thePucture.id", thePucture.id); // POR EJEMPLO AQUI ESTAMOS INVOCANDO AL METODO get id() PUESTO QUE ESTAMOS EN UN MODO LECTURA, NO ESTAMOS ASIGNANDO UN NUEVO VALOR SINO LEYENDO EL ESTADO ACTUAL.

//AQUI PODEMOS VER COMO ACCEDER A MIEMBROS DE LAS CLASES MEDIANTE INSTANCIAS (OBJETOS)

thePucture.id = 100; // AQUI ESTAMOS ASIGNANDO UN NUEVO VALOR A UN MIEMBRO PRIVADO, SIN EMBARGO INTERNAMENTE TS ESTA INVOCANDO AL METODO set id() CON EL PARAMETRO IGUAL A 100
thePucture.title = "Walking to the street with she";
theAlbum.title = "The first date was awesome!";

console.log( "theAlbum", theAlbum);

//  const item = new Item(1, "Traveling with my wife to Spain");
//  console.log("item", item)

//PROVANDO EL MIEMBRO ESTATICO DE LA LINEA 40  ( SIN USAR INSTANCIAS)
console.log("TheOtherPicture", TheOtherPicture.NewAnotherPhotoOrientation.Landscape); //ESTAMOS ACCEDIENDO A UN MIEMBRO POR MEDIO DE LA CLASE
