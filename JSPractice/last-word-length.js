const string = "Yash read the best stories from industry";
const string1 = "xyz-123"


const findLastWord = (string) => {
    let lastWord = '';

    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i] !== " ") {
            lastWord = string[i] + lastWord;
        } else {
            break;
        }
    }

    return lastWord;
}


const words = string1.split(" ");
console.log(words);


// const concat = (f, s) => {
//     return `${f}${s}`;
//     return f + s;
// }

// console.log(concat("Yash", "Patil"));

// console.log(findLastWord(string, 3));