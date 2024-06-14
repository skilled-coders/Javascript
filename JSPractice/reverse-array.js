const array = [23, 12, 34, 122, 5, 87];

// resverse: [87, 5, 122, 34, 12, 23];

let start = 0
let end = array.length - 1;

while (start < end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
}

console.log(array);