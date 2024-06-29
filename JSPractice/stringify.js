const x = 10;
const y = "10";

console.log(x, typeof x);
console.log(y, typeof y);

const z = x.toString();
const p = String(x);
console.log(z, typeof z);
console.log(p, typeof p);

const obj = {
    name: "Yash",
    age: 29,
    city: "Shirpur",
    address: "Yash colony"
};

console.log(obj, typeof obj);
const stringiFiedObj = JSON.stringify(obj, null, 2);

console.log(stringiFiedObj);
// console.log(stringiFiedObj.includes)

const number = "10";
console.log(number, typeof number);
const stringifiedNumber = parseFloat(number).toFixed(3);
// const stringifiedNumber = +number;

console.log(stringifiedNumber, typeof stringifiedNumber);