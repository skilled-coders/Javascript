const number = 9;

let isPrime = true;

for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        console.log("Number is not a prime number; since it is also divisible by number " + i);
        break;
    }
}

if (isPrime) {
    console.log("Number is prime number");
}