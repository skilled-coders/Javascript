const number1 = 12;
const number2 = 21;

const array = [12, 21, 22, 31, 33, 42];

// Multiplication is 252

console.log("Multiplication is " + (number1 * number2));

let multiplication = 1;
for (let i = 0; i < array.length; i++) {
    multiplication = multiplication * array[i];
}

console.log("Multiplication is " + multiplication);