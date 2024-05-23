// Array spread operator
const x = [1, 2, 3];
const y = [4, 5];

const z = [...x, ...y];

console.log(z[4]);

console.log("z ", z)

// Objects
const students = [];

const student1 = {
    id: 1,
    name: "Jay Patil",
    school: "RCP",
    address: "New Ganesh Colony",
    dob: "05/04"
};

console.log(student1.name);
console.log("#####", student1["name"]);

let student2 = {
    id: 2,
    name: "Bharat Sutar",
    school: "RCP",
    address: "Ganesh Colony",
    dob: "15/08"
};

student1.address = "Andheri East";
delete student2.school;
student2.college = "RCP";

// Add new key using spread operator..

student2 = {
    ...student2,
    id: 3,
    address: "Sarswati Colony",
    age: 20,
};

console.log("S1 :", student1);
console.log("S2 :", student2);

students.push(student1);
students.push(student2);

console.log(students)

// strings
let name = "Yash Patil";
const newName = name.replace("Y", "J");
console.log("Name", name);
console.log("New Name", newName);

console.log(typeof name);
console.log("4th letter of name is ", name[3]);

// Number
const monbileNumber = 100;
console.log("Mobile Number", monbileNumber)
// Boolean
const flag = true;
console.log("Flag", flag);

// Sort
const array = [4, 2, 9, 1];
array.sort();
console.log(array);