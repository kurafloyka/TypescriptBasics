import Customer from "./customer.js";
let age;
age: 12;
let isIntructor = true;
let userName = "faruk";
let hobbies = ["Football", "Basketball"];
let person = { name: "Max", surname: "Ali", isIntructor: true, age: 34 };
let person1;
let person2;
person2 = { name: "faruk", username: true };
let person3;
(person2 = { name: "faruk", username: true }),
    { name: "faruk", username: true };
let userName1 = "faruk";
userName1 = false;
let user1;
user1 = { username: "faruk", password: 123 };
function add(a, b) {
    return a + b;
}
function printf(value) {
    console.log(value);
}
function insertAtBeginning(array, value) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 3, 4];
const updatedArray = insertAtBeginning(demoArray, 3);
const stringArray = insertAtBeginning(["a", "b", "v"], "s");
//updatedArray[0].split('');  error
class Student {
    //firstName: string;
    //lastName: string;
    //age: number;
    //private courses: string[];
    constructor(firstName, lastName, age, courses) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.courses = courses;
    }
    enrol(courseName) {
        this.courses.push(courseName);
    }
    listCourses() {
        return this.courses.slice();
    }
}
const student = new Student("Faruk", "Akyol", 32, ["Angular", "React"]);
student.enrol("Java");
student.listCourses();
let max;
max = {
    firstName: "Faruk",
    age: 23,
    greet() {
        console.log("Hello!!!");
    },
};
class Instructor {
    greet() {
        console.log("Hello!!!");
    }
}
let adi = "Farukk";
let soyadi = "Akyol";
console.log(`Hi,${adi} ${soyadi}`);
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let reviews = [4, 3.2, 6, 78];
let total = 0;
for (let i = 0; i < reviews.length; i++) {
    total += reviews[i];
}
let average = total / reviews.length;
console.log("Review Average : " + average);
let sportsOne = ["Football", "Volleyball", "Swimming"];
for (let tempSport of sportsOne) {
    console.log(tempSport);
    if (tempSport == "Football") {
        console.log("It is my favourite : " + tempSport);
    }
}
sportsOne.push("Cricket");
let myCustomer = new Customer("Farsukkk", "Akyoll");
//myCustomer.firstName = "Faruk";
//myCustomer.lastName = "Akyol";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
myCustomer.firstName = "Alii";
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
