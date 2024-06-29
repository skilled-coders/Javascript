const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const removeElement = [1, 2, 5, 3, 7];

const removeElementMap = {};

removeElement.forEach((ele) => {
    removeElementMap[ele] = true;
});

console.log(removeElementMap);

const newArray = []
for (let i = 0; i < array.length; i++) {
    if (!removeElementMap[array[i]]) {
        newArray.push(array[i]);
    }
}

console.log(newArray);
