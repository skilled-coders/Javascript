const fName = "YASH ARUN PATIL YY R";

const counter = {};

for (let i = 0; i < fName.length; i++) {
    const letter = fName[i];

    if (letter === " ") {
        continue;
    }

    if (counter[letter]) {
        counter[letter] = counter[letter] + 1;
    } else {
        counter[letter] = 1;
    }
}

console.log(JSON.stringify(counter, null, 2));
