const person = {
    name: "Jatin",
    age: 20,
    sex: "male"
};

console.log(person.name);
console.log(person.age);
console.log(person.sex);

console.log("==================");
const keys = Object.keys(person);
console.log(keys);

keys.forEach((key) => {
    console.log(person[key]);
});

console.log("==================");
const values = Object.values(person);
console.log(values);
values.forEach((value) => {
    console.log(value);
}); // O(n)

console.log("==================");
const keyValues = Object.entries(person);
console.log(keyValues);
keyValues.forEach((keyValue) => {
    console.log(keyValue[1]);
});
