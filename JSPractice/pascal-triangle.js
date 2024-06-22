// pascal triangle = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], ...]

const pascalTriangle = (levels) => {
    const triangle = [];

    if (levels === 1) {
        triangle.push([1]);
    }
    /*
        level = 4;
        prev = triangle[level - 1];

        levelArray = [];
        for (let i = 0; i <= prev.length; i++) {
            if (i === 0) {
                levelArray.push(1);
            } else if (i === prev.length) {
                levelArray.push(1);
            } else {
                levelArray.push(prev[i] + prev[i - 1]);
            }
        }

    */

    return triangle;
};

console.log(pascalTriangle(1));