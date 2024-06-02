const findMax = (array) => {
    let max = array[0];

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }

    // MAXIMUM NUMBER OF THE GIVEN ARRAY IS 56
    console.log("MAXIMUM NUMBER OF THE GIVEN ARRAY IS", max);
    console.log("MAXIMUM NUMBER OF THE GIVEN ARRAY IS " + max);
    console.log(`MAXIMUM NUMBER OF THE GIVEN ARRAY IS ${max}`);
};

findMax([12, 3, 4, 34, 11, 56, 1]);