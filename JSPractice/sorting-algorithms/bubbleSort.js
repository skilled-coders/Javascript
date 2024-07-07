// BUBBLE SORT =======>
// array = [12, 23, 5, 45, 10];
// [12, 5, 23, 45, 10];
// [12, 5, 23, 10, 45];

// [5, 12, 23, 10, 45];
// [5, 12, 10, 23, 45];

// [5, 10, 12, 23, 45];

const bubbleSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) { // i = 1
        let wasSwapRequired = false;
        for (let j = 0; j < array.length - i - 1; j++) { // j = 0
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                wasSwapRequired = true;
            }
        }

        if (!wasSwapRequired) {
            break;
        }
    }

    return array;
};

// time complexity: O(n2)

const array = [12, 23, 1, 5, 45, 10, 78, 8];
console.log(bubbleSort(array));

// const x = [12, 23, 34, 45, 54];
// // [12, 23, 54, 45, 34];

// let temp = x[2];
// x[2] = x[4];
// x[4] = temp;

// console.log(x)
