const array = [12, 23, 34, 54, 12, 98, 54, 98, 21];

// output: [12, 23, 34, 54, 98];

const output = [];
for (let i = 0; i < array.length; i++) {
    const number = array[i];

    let exists = false;
    for (let j = 0; j < output.length; j++) {
        if (output[j] === number) {
            exists = true;
            break;
        }
    }

    if (!exists) {
        output.push(number);
    }
}

console.log(output);

// 0: number = 12 output = [] |||| output = [12];
// 1: number = 23 output = [12] |||| output = [12, 23];
// 2: number = 34 output = [12, 23] |||| output = [12, 23, 34];
// 3: number = 54 output = [12, 23, 34] |||| output = [12, 23, 34, 54];
// 4: number = 12 output = [12, 23, 34, 54] |||| output = [12, 23, 34, 54];

const removeDuplicates = (array) => {
    const output = [];
    const keyMap = {};
    for (let i = 0; i < array.length; i++) {
        const number = array[i];

        if (!keyMap[number]) {
            keyMap[number] = true;
            output.push(number);
        }
    }

    return output;
}

// 0: number = 12; output = []; keyMap = {} |||| keyMap = {12: true}; output = [12];
// 1: number = 23 output = [12]; keyMap = {12: true} |||| keyMap = {12: true, 23: true}; output = [12, 23];
// 2: number = 34 output = [12, 23] |||| output = [12, 23, 34];
// 3: number = 54 output = [12, 23, 34] |||| output = [12, 23, 34, 54];
// 4: number = 12 output = [12, 23, 34, 54] |||| output = [12, 23, 34, 54];

console.log(removeDuplicates(array));