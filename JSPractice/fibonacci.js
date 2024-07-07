// 1, 1, 2, 3, 5, 8, 13, 21, ....

const generateFibonacci = (level) => {
    // const series = []
    // for (let i = 0; i < level; i++) {
    //     if (i === 0 || i === 1) {
    //         series.push(1);
    //     } else {
    //         const nextNumber = series[i - 2] + series[i - 1];
    //         series.push(nextNumber);
    //     }
    // }

    let a = 0;
    let b = 1;
    const series = [a, b];
    let nextNumber;
    let i = 2;

    while (i < level) {
        nextNumber = a + b;
        series.push(nextNumber);
        a = b;
        b = nextNumber;
        i++;
    }

    return series;
}

console.log(generateFibonacci(10));