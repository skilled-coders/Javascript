const array = [34, 12, 65, 32, 1, 88, 43, 87];
// ans: 1;

let small = array[0]; // 34

for (let i = 1, j = array.length - 1; i < j; i++, j--) {
    if (array[i] < small) {
        small = array[i];
    }

    if (array[j] < small) {
        small = array[j];
    }

    console.log(i)
}

let fn;
for (let i = 0; i < array.length / 2; i++) {
    fn = array[i]; // 0
    let sn = array[array.length - 1 - i]; // 6

    if (sn < fn) {
        fn = sn;
    }

    console.log("===")
}

let x = 0;
y = array.lenght - 1;
while (x < y) {
    if (array[i] < small) {
        small = array[i];
    }

    if (array[j] < small) {
        small = array[j];
    }
    x++;
    y--;
}

console.log("Ans", small);