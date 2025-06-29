export function sayHello(name: string): void {
  console.log(`Hello ${name}`);
}
export let something = "something";

export const person = "susan";

export type Student = {
  name: string;
  age: number;
};

const newStudent: Student = {
  name: "peter",
  age: 25,
};

export default newStudent;
