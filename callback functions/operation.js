function calculate(num1, num2, operationCallback) {
    return operationCallback(num1, num2);
}

function addition(num1, num2) {
     return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

console.log(calculate(10, 5, addition));
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, division));


// Expected outputs:
// Addition callback: 15 (for 10, 5)
// Multiplication callback: 50 (for 10, 5)
// Division callback: 2 (for 10, 5)