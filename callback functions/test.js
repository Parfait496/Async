function filterArray(array, testCallback) {
    return testCallback(array);
}

function filterEvens(array) {
    return array.filter((e) => e % 2 === 0);
}

function largeNumbers(array) {
    return array.filter((e) => e > 5)
}

const Example = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(filterArray(Example, filterEvens));
console.log(filterArray(Example, largeNumbers));



// Example array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Expected output with even number test: [2, 4, 6, 8, 10]
// Expected output with numbers greater than 5: [6, 7, 8, 9, 10]