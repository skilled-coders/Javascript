const paran1 = "()[]{}"
const paran2 = "({}[<>{}])"
const paran3 = "{[]}()<{}]>"
const paran4 = "{[]<>(([]){})}"

const validateParantheses = (combination) => {
    const expectedClosingParantheses = [];

    const parentheses = {
        "(": ")",
        "[": "]",
        "{": "}",
        "<": ">"
    };

    for (let i = 0; i < combination.length; i++) {
        const key = combination[i];
        const value = parentheses[key];

        console.log(key, expectedClosingParantheses);
        if (value) { // check if opening brace
            console.log("This is an opening item");
            expectedClosingParantheses.push(value);
        } else if (expectedClosingParantheses[expectedClosingParantheses.length - 1] === key) { // if closing brace and last item of the expected closing array matches
            console.log("Found closing, poping the last item");
            expectedClosingParantheses.pop();
        } else {
            console.log("Did not match with the expected closing item");
            return false;
        }
    }

    if (expectedClosingParantheses.length === 0) {
        return true;
    } else {
        return false;
    }
}

console.log(validateParantheses("(()[[{<<}[{}]<>{}}]{][))"));
