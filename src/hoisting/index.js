// Digamos que JS hace primero esto, a eso nos referimos con elevación, como
// que reconoce antes todas las variables:
// var nameOfDog;
console.log(nameOfDog); // undefined
var nameOfDog = "Jaager";

nameOfDog();

// La función esta disponible, pero la variable dog sigue
// sigue siendo undefined, solo se ha declarado, no asignado
function nameOfDog() {
    console.log(`El mejor perrito es ${dog}`)
}

var dog = "Jaager";

function funcion() {
    var variable1 = "a";
}

console.log(variable1);