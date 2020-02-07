const app = document.getElementById('app'); 

const characters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male",
    },
    {
        name: "C-3PO",
        height: "167",
        mass: "75",
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a",
    },
    {
        name: "R2-D2",
        height: "96",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female",
    },
    {
        name: "Owen Lars",
        height: "178",
        mass: "120",
        hair_color: "brown, grey",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "52BBY",
        gender: "male",
    },
    {
        name: "Beru Whitesun lars",
        height: "165",
        mass: "75",
        hair_color: "brown",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "47BBY",
        gender: "female",
    },
    {
        name: "R5-D4",
        height: "97",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, red",
        eye_color: "red",
        birth_year: "unknown",
        gender: "n/a",
    },
    {
        name: "Biggs Darklighter",
        height: "183",
        mass: "84",
        hair_color: "black",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "24BBY",
        gender: "male",
    },
    {
        name: "Obi-Wan Kenobi",
        height: "182",
        mass: "77",
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male",
    }
];

app.innerHTML = '<h1>Métodos de mutación con Arrays</h1>';


/* 

    Métodos de mutación con Arrays
    Estos métodos modifican el array original.

*/ 


//     .Push   :   Esté metodo añadirá "Anakin" al final del array 
// Esté método añade uno o más elementos al final de un array y devuelve la nueva longitud del array.

const moreCharacters = characters.push({
    name: "Anakin Skywalker", 
    height: "188", 
    mass: "84", 
    hair_color: "blond", 
    skin_color: "fair", 
    eye_color: "blue", 
    birth_year: "41.9BBY", 
    gender: "male"
}); 

console.log(characters);



//     .Pop   :   Eliminará "Anakin" del final del array 
// Esté método elimina el último elemento de un array y devuelve dicho elemento.

const lastCharacter = characters.pop(characters[10]);

console.log(characters);



//     .UnShift   :   Añade "Han Solo" al inicio del array 
// Esté método añade uno o más elementos al principio del array y devuelve la nueva longitud del array.

const firstCharacter = characters.unshift({
    name: "Han Solo",
    height: "180",
    mass: "80",
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "29BBY",
    gender: "male"
});

console.log(characters);



//     .Shift   :   Elimina "Han Solo" del inico del array 
// Esté método elimina el primer elemento de un array y devuelve dicho elemento.

const deleteCharacter = characters.shift({
    name: "Han Solo",
    height: "180",
    mass: "80",
    hair_color: "brown",
    skin_color: "fair",
    eye_color: "brown",
    birth_year: "29BBY",
    gender: "male"
}); 

console.log(characters);


characters.map((character) => {
    console.log(character.name);
    const p = document.createElement('p');
    p.textContent = `${character.name}`
    app.appendChild(p)
});