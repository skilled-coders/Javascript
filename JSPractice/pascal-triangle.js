// pascal triangle = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], ....]

1//           1
2//         1   1
3//       1   2   1
4//     1   3   3   1
5//   1   4   6   4   1
6// 1   5   10  10  5   1

const pascalTriangle = (levels) => {
    const triagle = [];
    if (levels <= 0) {
        return "Murkh.."
    }
    for (let i = 0; i < levels; i++) {
        const subset = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                subset.push(1);
            } else {
                const upperArray = triagle[i - 1];
                const sum = upperArray[j - 1] + upperArray[j];
                subset.push(sum);
            }
        }

        triagle.push(subset);
    }

    return triagle;
};

const optimizedPascalTriangle = (levels) => {
    const triagle = [];
    if (levels <= 0) {
        return "Please provide correct value"
    }
    if (levels >= 1) {
        triagle.push([1])
    }

    for (let i = 1; i < levels; i++) {
        const subset = [];
        subset.push(1)
        for (let j = 1; j < i; j++) {
            const upperArray = triagle[i - 1];
            const sum = upperArray[j - 1] + upperArray[j];
            subset.push(sum);
        }
        subset.push(1);

        triagle.push(subset);
    }

    return triagle;
};


console.log(pascalTriangle(6));
