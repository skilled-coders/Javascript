// 1221 => 1221
// abcba => 

const reverse = (string) => {
    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = `${reversedString}${string[i]}`;
    }

    return reversedString;
}

const palindrome = (string) => {
    const originalString = string;
    const reversedString = reverse(string);

    if (originalString === reversedString) {
        return true;
    } else {
        return false;
    }
}

const optimizedPalindrome = (string) => {
    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        if (string[start] !== string[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// console.log(palindrome("yashsay"));
console.log(optimizedPalindrome("yashsay"));