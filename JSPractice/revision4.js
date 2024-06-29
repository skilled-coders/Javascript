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

// PROBLEMS

// Sum of even numbers is 76
// Sum of odd numbers is xyz

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        evenSum = evenSum + array[i];
    } else {
        oddSum = oddSum + array[i];
    }
}

console.log("Sum of even numbers is " + evenSum);
console.log("Sum of odd numbers is " + oddSum);

// Sum of even indexed numbers is xyz
// Sum of odd idexed numbers is abc