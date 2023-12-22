import Customer from "./customer.js";

let age: number;
age: 12;

let isIntructor: boolean = true;

let userName: string = "faruk";

let hobbies: string[] = ["Football", "Basketball"];

let person = { name: "Max", surname: "Ali", isIntructor: true, age: 34 };

let person1: any;

let person2: {
  name: string;
  username: boolean;
};

person2 = { name: "faruk", username: true };

let person3: {
  name: string;
  username: boolean;
}[];

(person2 = { name: "faruk", username: true }),
  { name: "faruk", username: true };

let userName1: string | boolean = "faruk";
userName1 = false;

type User = { username: string; password: number };

let user1: User;

user1 = { username: "faruk", password: 123 };

function add(a: number, b: number): number | string {
  return a + b;
}

function printf(value: any) {
  console.log(value);
}

function insertAtBeginning<T>(array: T[], value: T) {
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

  constructor(
    public firstName: string,
    public lastName: string,
    public age: number,
    private courses: string[]
  ) {}

  enrol(courseName: string) {
    this.courses.push(courseName);
  }

  listCourses() {
    return this.courses.slice();
  }
}

const student = new Student("Faruk", "Akyol", 32, ["Angular", "React"]);

student.enrol("Java");
student.listCourses();

//type keyword
interface Human {
  firstName: String;
  age: number;
  greet: () => void;
}

let max: Human;

max = {
  firstName: "Faruk",
  age: 23,
  greet() {
    console.log("Hello!!!");
  },
};

class Instructor implements Human {
  firstName: String;
  age: number;
  greet() {
    console.log("Hello!!!");
  }
}

let adi: string = "Farukk";
let soyadi: string = "Akyol";
console.log(`Hi,${adi} ${soyadi}`);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let reviews: number[] = [4, 3.2, 6, 78];
let total = 0;

for (let i = 0; i < reviews.length; i++) {
  total += reviews[i];
}

let average: number = total / reviews.length;
console.log("Review Average : " + average);

let sportsOne: string[] = ["Football", "Volleyball", "Swimming"];

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
