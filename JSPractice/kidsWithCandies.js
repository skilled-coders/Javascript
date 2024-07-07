const array = [12, 1, 12];
const extraCandies = 10;

// [false, true, false, false, false]

// lergestNumber = 4

const kidsWithCandies = (array, extraCandies) => {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (max < array[i]) {
            max = array[i];
        }
    }

    const output = [];
    for (let i = 0; i < array.length; i++) {
        const totalCandies = array[i] + extraCandies;
        if (totalCandies >= max) {
            output.push(true);
        } else {
            output.push(false);
        }
    }

    return output;
};

console.log(kidsWithCandies(array, extraCandies));