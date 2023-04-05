function fruits() {
    if (true) {
        var fruit1 = "Apple";
        let fruit2 = "Kiwi";
        const fruit3 = "Banana";
    }

    console.log(fruit1); // Apple
    console.log(fruit2); // Error
    console.log(fruit3); // Error
}

fruits();
console.log(fruit1);