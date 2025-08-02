function formatName(firstName, lastName, callback) {
    return callback(firstName, lastName);
}

function formatA(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function formatB(first, last) {
    return `${first}, ${last}`;
}

function formatC(first, last) {
    return `${first[0]} ${last}`
}

console.log(formatName('John', 'Doe', formatA));
console.log(formatName('John', 'Doe', formatB));
console.log(formatName('John', 'Doe', formatC));



// Example usage:


// Expected outputs (with different callbacks):
// "John Doe"
// "DOE, John"
// "J. Doe"