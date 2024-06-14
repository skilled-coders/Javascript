const array = [23, 12, 34, 122, 5, 87];

// odd: [23, 5, 87];
// even: [12, 34, 122];

const even = [];
const odd = [];
// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         even.push(array[i]);
//     } else {
//         odd.push(array[i]);
//     }
// }

let i = 0;
let j = array.length - 1;

const checkIfEven = (number) => {
    if (number % 2 === 0) {
        even.push(number);
    } else {
        odd.push(number);
    }
}

while (i < j) {
    checkIfEven(array[i]);
    checkIfEven(array[j]);
    i++;
    j--;
    console.log("====")
}

console.log(even);
console.log(odd);