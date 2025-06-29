import newStudent, { sayHello, person, type Student } from "./actions";
//import type { Student } from "./actions";
//import { someValue } from "./example.js";

sayHello("Typescript");
console.log(newStudent);
console.log(person);

const anotherStudent: Student = {
  name: "other",
  age: 45,
};
