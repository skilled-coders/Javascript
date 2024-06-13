const object = {
    x: 6,
    y: 8,
    z: 5,
    0: 7,
    "v": 0,
    _name: 'Yash',
    sayHi: () => console.log("Hi"),
};

// const z = 'y';
// console.log(object);

// console.log(object.x);

// console.log(object.y);

// console.log(object[z]);

const printObjectKey = (key) => {
    if (object[key]) {
        if (typeof object[key] === 'function') {
            console.log(object[key]());
        } else {
            console.log(object[key]);
        }
    } else {
        console.log(`${key} does not exit`);
    }
}

printObjectKey("sayHi");