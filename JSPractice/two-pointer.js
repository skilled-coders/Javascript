const array = [1, 2, 3, 4, 5, 6];

// [[1, 6], [2, 5], [3, 4]];
// TWO POINTER
const result = [];
for (let i = 0, j = array.length - 1; i < array.length / 2; i++, j--) {
    // console.log(array[i], array[j]);
    const pair = [array[i], array[j]];
    result.push(pair);
}
console.log(result);

console.log("=====================");
// TWO POINTER
const whileResult = [];
let start = 0; // global scope
let end = array.length - 1; // block scope
while (start < end) {
    // console.log(array[start], array[end]);
    whileResult.push([array[start], array[end]]);
    start++;
    end--;
}
console.log(whileResult);


// BIG O Notations

