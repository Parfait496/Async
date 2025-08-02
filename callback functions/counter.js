function counter(callback) {
    for(let i = 1; i <= 5; i++){
        setTimeout(() => callback(i), i*1000);
    }
};

function printNumber(num) {
    console.log(num);
};

counter(printNumber);

// Expected output (one number per second):
// 1
// 2
// 3
// 4
// 5