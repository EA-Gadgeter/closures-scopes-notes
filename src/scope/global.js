// Declarando una variable 
var a;
// Declarando y asignando
var b = "b";
// Reasignacións
b = "bb";
// Redeclarando
var a = "aa";

// Global Scope
var fruit = "Apple";

function bestFruit() {
    console.log(fruit);
}

bestFruit();

// Solo asignación hace una variable global
function bestCountry() {
    country = "México";
    console.log(country);
}

bestCountry();
console.log("Fuera func", country);