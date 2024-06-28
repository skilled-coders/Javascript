// a, e, i, o, u

const countVowels = (string) => {
    const toFind = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
    };
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (toFind[char]) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("Bhupendraaa"));
