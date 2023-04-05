function greeting() {
    let username = "Chino";

    function displayUsername() {
        return `Hello ${username}`;
    }
    
    return displayUsername;
}

const greet = greeting();
console.log(greet);
console.log(greet());