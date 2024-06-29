const paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero unde ipsa qui, ipsum corporis hic vel corrupti perferendis minima optio fugit quas, voluptatem harum excepturi quaerat tenetur officia totam? Sapiente!";

const sanitizedParagraph = paragraph.replace(/'/g, "").replace(/,/g, "").replace(/\?/g, "").replace(/\./g, "").replace(/\!/g, "");
const words = sanitizedParagraph.split(" ");
console.log(words);

let longestWord = words[0];
let longestWordLength = longestWord.length;

for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const wordLength = word.length;

    if (wordLength > longestWordLength) {
        longestWord = word;
        longestWordLength = wordLength;
    }
}

console.log("The longest word is " + longestWord);
