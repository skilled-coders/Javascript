const array = [12, 43, 23, 9, 76, 34, 91];

const search = (number) => {
    let found = false;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            found = true;
            break;
        }
    }

    return found;
}

console.log(search(19));

console.log(array.includes(31));