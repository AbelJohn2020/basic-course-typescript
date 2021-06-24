// Orientacion para fotografias 
// const landscape = 0;
// const portrait = 1;
// const square = 3;
// const panorama = 4;

//enum ES UNA PALABRA RESERVADA
enum PhotoOtientation {
    Landscape,  // 0
    Portrait,   // 1
    Square,     // 2
    Panorama,   // 3
}

const landscape: PhotoOtientation = PhotoOtientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOtientation[landscape]);

enum PictureOtientation {
    Landscape = 10,  // 10
    Portrait,   // 1
    Square,     // 2
    Panorama,   // 3
}

const landscapePictureOrientation: PictureOtientation = PictureOtientation.Portrait;
console.log('landscapePictureOrientation', landscapePictureOrientation);
console.log('landscapePictureOrientation', PictureOtientation[landscapePictureOrientation]);

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    Peru = 'pe',
    EEUU = 'usa',
    España = 'esp',
}

const country: Country = Country.Peru;
console.log("country", country);