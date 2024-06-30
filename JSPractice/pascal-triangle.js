// pascal triangle = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], ....]

//           1
//         1   1
//       1   2   1
//     1   3   3   1
//   1   4   6   4   1
// 1   5   10  10  5   1

const pascalTriangle = (levels) => {
    const triangle = [];
    for (let i = 0; i < levels; i++) {
        if (i === 0) {
            triangle.push([1]);
        } else {
            const subset = []
            for (let j = 0; j <= i; j++) {
                if (j === 0) {
                    subset.push(1);
                } else if (j === i) {
                    subset.push(1);
                } else {
                    const sum = triangle[i - 1][j - 1] + triangle[i - 1][j];
                    subset.push(sum);
                }
            }
            triangle.push(subset);
        }
    }
    return triangle;
};


console.log(pascalTriangle(6));