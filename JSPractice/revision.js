const number1 = 12;
const number2 = 21;

const array = [12, 21, 22, 31, 33, 42];

// number1 is even
// number2 is odd

const checkIfEvenOrOdd = (number) => {
    if (number % 2 === 0) {
        console.log("Number " + number + " is even");
    } else if (number % 2 === 1) {
        console.log("Number " + number + " is odd");
    }
}

checkIfEvenOrOdd(number1);
checkIfEvenOrOdd(number2);

console.log("==============================");

// checkIfEvenOrOdd(array[0]);
// checkIfEvenOrOdd(array[1]);
// checkIfEvenOrOdd(array[2]);
// checkIfEvenOrOdd(array[3]);
// checkIfEvenOrOdd(array[4]);
// checkIfEvenOrOdd(array[5]);

for (let i = 0; i < array.length; i++) {
    checkIfEvenOrOdd(array[i]);
    // checkIfEvenOrOdd();
}


