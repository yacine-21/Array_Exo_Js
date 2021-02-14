const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

// **********************************************************MAP**********************************************************

//1. Get array of all names
let Allnames = characters.map((character) => character.name)
console.log(Allnames)
//2. Get array of all heights
let AllHeights = characters.map((character) => character.height)
console.log(AllHeights)
//3. Get array of objects with just name and height properties
let ArrayProperties = characters.map((character) => {
    return (character.name + "-" + character.height).split("-")
})
console.log(ArrayProperties)
//4. Get array of all first names
let AllNames = characters.map((character =>{
    firstName = character.name.split(" ")[0]
    return firstName
}))
console.log(AllNames)

//**********************************************************REDUCE**********************************************************

//1. Get total mass of all characters
let massCharacters = characters.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.mass
},0)
console.log(massCharacters);
//2. Get total height of all characters
let heightCharacters = characters.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.height
},0)
console.log(heightCharacters);
//3. Get total number of characters by eye color
let eyeColor = characters.reduce((acc, curr) => {
    return acc + curr.name + ": " +  curr.eye_color + ". "
},"")

console.log(eyeColor);
//4. Get total number of characters in all the character names
let numberNamesCharacters = characters.reduce((acc,curr)=> {
   return acc + curr.name.length
},0)
console.log(numberNamesCharacters)
// console.log(numberNamesCharacters);


//**********************************************************FILTER**********************************************************

//1. Get characters with mass greater than 100
let MAssOverThan100 = characters.filter((character) => (character.mass > 100))
console.log(MAssOverThan100)
//2. Get characters with height less than 200
let CharacterHeightOver200 = characters.filter((character => character.height > 200))
console.log(CharacterHeightOver200)
//3. Get all male characters
let characterMale = characters.filter((character => character.gender ==="male"))
console.log(characterMale)
//4. Get all female characters
let characterFemale = characters.filter((character => character.gender ==="female"))
console.log(characterFemale)

//**********************************************************SORT**********************************************************

//1. Sort by mass
function sortByMass (a,b){
    return a.mass - b.mass
}
let SortCharactersByMass = characters.sort(sortByMass)
console.log(SortCharactersByMass)
//2. Sort by height
function sortByHeight (a,b){
    return a.height - b.height
}
let sortCharactersByHeight = characters.sort(sortByHeight)
console.log(sortCharactersByHeight)
//3. Sort by name
function sortByName (a,b) {
    if (a.name > b.name){
        return 1
    } else {
        return -1
    }
}
let sortCharactersByName = characters.sort(sortByName)
console.log(sortCharactersByName)
//4. Sort by gender
function sortByGender(a,b){
    if (a.gender > b.gender){
        return 1
    } else {
        return -1
    }
}
let sortCharactersByGender = characters.sort(sortByGender)
console.log(sortCharactersByGender)

//**********************************************************EVERY**********************************************************

//1. Does every character have blue eyes?
let AllBluesEyes = characters.every((character) => character.eye_color === "blue")
console.log(AllBluesEyes)
//2. Does every character have mass more than 40?
let MassOver40 = characters.every((character)=> character.mass > 40)
console.log(MassOver40)
//3. Is every character shorter than 200?
let shorterThan200 = characters.every((character)=> character.height < 202)
console.log(shorterThan200)
//4. Is every character male?
let EveryMale = characters.every((character)=> character.gender === "male")
console.log(EveryMale)

//**********************************************************SOME**********************************************************
//1. Is there at least one male character?
let AtLeastOneMale = characters.some((character)=> character.gender ==="male")
console.log(AtLeastOneMale)
//2. Is there at least one character with blue eyes?
let AtLeastOneBlueEyes = characters.some((character)=> character.eye_color === "blue")
console.log(AtLeastOneBlueEyes);
//3. Is there at least one character taller than 210?
let AtleastTallerThan200 = characters.some((character)=> character.height > 210)
console.log(AtleastTallerThan200)
//4. Is there at least one character that has mass less than 50?
let AtLeastMassLessThan50 = characters.some((character)=> character.mass < 50)
console.log(AtLeastMassLessThan50)
