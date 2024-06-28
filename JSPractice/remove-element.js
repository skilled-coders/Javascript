const array = [1, 2, 3, 4, 5];

const removeElement = [1, 2];

const newArray = []
for (let i = 0; i < array.length; i++) {
    // if (removeElement.includes(array[i])) {
    //     continue;
    // }
    let exists = false;
    for (let j = 0; j < removeElement.length; j++) {
        if (array[i] === removeElement[j]) {
            exists = true;
            break;
        }
    }
    if (!exists) {
        newArray.push(array[i]);
    }
}

console.log(newArray);
