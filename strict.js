"use strict";
pi = 3.1416 // Con el strict genera error
console.log(pi);

function myFunction() {
    "use strict";
    return pi = 500;
}

console.log(myFunction());
console.log(pi);
