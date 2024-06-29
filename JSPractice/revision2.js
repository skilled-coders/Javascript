const number1 = 12;
const number2 = 21;

const array = [12, 21, 22, 31, 33, 42];

// square of 12 is 144
// square of 21 is 441

const square = (number) => {
    console.log("square of " + number + " is " + number * number);
}

square(number1);
square(number2);

console.log("==============================");

for (let i = 0; i < array.length; i++) {
    square(array[i]);
}

console.log("==============================");

// sum of numbers is 33

console.log("Sum of numbers is " + (number1 + number2));

// sum of all the numbers is 161

let sum = 0;
for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
}

console.log("sum of all the numbers is " + sum);