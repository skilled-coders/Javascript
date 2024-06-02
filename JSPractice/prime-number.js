function checkIfPrime(number) {
    let isPrime = true;

    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
            isPrime = false;
            console.log(number + " is not a prime number; since it is also divisible by number " + i);
            break;
        }
    }

    if (isPrime) {
        console.log(number + " is prime number");
    }
};

checkIfPrime(11);
checkIfPrime(111);
checkIfPrime(110);
checkIfPrime(120);