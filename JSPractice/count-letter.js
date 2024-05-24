const fName = "XYASH ARUN PATIL YY R";

const counter = {
    X: 1,
    Y: 3,
    A: 3,
    S: 1,
    H: 1,
};
let max = 3;
// let maxOccuredLetter = fName[0];

for (let i = 0; i < fName.length; i++) {
    const letter = fName[i];

    if (letter === " ") {
        continue;
    }
    if (counter[letter]) {
        const latestCounter = counter[letter] + 1;
        counter[letter] = latestCounter;
        if (latestCounter > max) {
            // maxOccuredLetter = letter;
            max = latestCounter;
        }
    } else {
        counter[letter] = 1;
    }
}

console.log(JSON.stringify(counter, null, 2));
// console.log("MAX: ", maxOccuredLetter);

const keys = Object.keys(counter); // [X, Y, A, S, H, R, U, ...]
for (let i = 0; i < keys.length; i++) {
    if (counter[keys[i]] === max) {
        console.log("Correct value: ", keys[i]);
        break;
    }
}
