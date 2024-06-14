const object = {
    x: 5,
    y: 8,
    z: 2,
};

const keys = Object.keys(object);

let small;
let _key;
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!small) {
        small = object[key];
    } else if (object[key] < small) {
        small = object[key];
        _key = key;
    }
}

console.log(`The smallest key is ${_key} and its value is ${small}`);