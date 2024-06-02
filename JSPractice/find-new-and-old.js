// og: [1, 2, 3]
// new: [2, 3]

// deleted = [1]

function findDeletedItems(oldArray, newArray) {
    const deleted = [];

    for (let i = 0; i < oldArray.length; i++) {
        let available = false;

        for (let j = 0; j < newArray.length; j++) {
            if (oldArray[i] === newArray[j]) {
                available = true;
                break;
            }
        }

        if (!available) {
            deleted.push(oldArray[i]);
        }
    }

    console.log(`Deleted items are ${deleted}`);
}

// findDeletedItems([1, 2, 3], [2, 3]);
findDeletedItems([12, 7, 14, 98, 32], [7, 98, 32]);