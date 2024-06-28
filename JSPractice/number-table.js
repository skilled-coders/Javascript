const reverseNumber = (number) => {
    let rem, sum = 0;

    while (number > 0) {
        rem = number % 10;
        sum = sum * 10 + rem; // 3
        number = parseInt(number / 10);
        // number = Math.floor(number / 10);
    }

    return sum;
};

const easyReverse = (number) => {
    console.log(number.toString().split("").reverse().join(""));
}

const number = 12345;
console.log(reverseNumber(number));
console.log(easyReverse(number));

// const fName = "Bharat";
// const lName = "Sutar";

// const user = [fName, lName];
// console.log(user);

// const fullName = user.join("-");
// console.log(fullName);
// console.log(`${fName} ${lName}`);

// const header = "X-CDN, X-CDN-Client-IP-Version, X-CDN-Proto, X-Cache, X-CDN-RCODE";

// console.log(header.split(', '));


