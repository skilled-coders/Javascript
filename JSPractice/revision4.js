const number1 = 12;
const number2 = 21;
const number3 = 10;

const array = [12, 21, 22, 31, 33, 42, 65];

// Average is 21.5

console.log("Average is " + ((number1 + number2 + number3) / 2));

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}

const avg = sum / array.length;

console.log("Average is " + avg.toFixed(2));