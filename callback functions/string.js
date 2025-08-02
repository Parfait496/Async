function transformString(text, callback1, callback2) {
    return callback2(callback1(text))
}

function upperCaseString(text) {
    return text.toUpperCase();
}

function reverseString(text) {
     return text.split('').reverse().join('');
}



let hello = "hello world";
console.log(transformString(hello, upperCaseString, reverseString));




// Input: "hello world"
// Expected output with uppercase and reverse callbacks:
// "DLROW OLLEH"