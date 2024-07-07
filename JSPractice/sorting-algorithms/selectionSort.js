// array = [12, 23, 5, 45, 10];

// // smallest Number is at 0

// smallest_index = 0;
// actual_smallest_index = 2;
// swap();

// // [5, 23, 12, 45, 10]

// smallest_index = 1;
// actual_smallest_index = 4;
// swap();

// // [5, 10, 12, 45, 23]

const selectionSort = (array) => {
    for (let i = 0; i < array.length - 1; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[smallestIndex]) {
                smallestIndex = j
            }
        }

        const temp = array[i];
        array[i] = array[smallestIndex];
        array[smallestIndex] = temp;
    }
    return array;
};

const array = [12, 23, 5, 45, 10];
console.log(selectionSort(array));
