console.log("typescript tutorial");

// interface someValue {
//   id: number;
//   name: string;
// }

// let someObj: someValue = {
//   id: 1,
//   name: "cristian",
// };

// console.log(someObj);

let awesomeName: string = "shakeAndBake";
awesomeName = "something";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);

//awesomeName = 20;

let amount: number = 20;
amount = 12 - 1;
// amount = "pants";

let isAwesome: boolean = true;
isAwesome = false;
// isAwesome = "shakeAndBake";

let greetring: string = "Hello, Typescript!";
greetring = greetring.toUpperCase();

let age: number = 25;
age = age + 5;

let isAdult: boolean = age >= 18;
// console.log(isAdult);

// greetring = 10;
// age = "thirty";
// isAdult = "yes";

/* Union types */

let tax: number | string = 10;
tax = 100;
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";
