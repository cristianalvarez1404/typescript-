/*
  Inteface => Allow to setup shape for objects (only objets)
*/

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
  printTitle(message: string): string;
  printSomething: (someValue: number) => number;
}

const deepWork: Book = {
  isbn: 9781455586691,
  title: "Deep Work",
  author: "Cal Newport",
  genre: "Self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  // printSomething(value) {
  //   return value;
  // },
  // printSomething: function (value) {
  //   return value;
  // },
  printSomething: (value) => {
    console.log(deepWork.title);
    return value;
  },
};

const deepWork1: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport 2",
  genre: "self-help",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title} ${message}`;
  },
  printSomething(value) {
    return value;
  },
};

// deepWork.printAuthor();
// deepWork1.printAuthor();
// console.log(deepWork.printTitle("is awesome book"));
// console.log(deepWork1.printTitle("is awesome book"));
// console.log(deepWork.printSomething(5));

// Exercise

interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  storage?: number;
  upgradeRam(value: number): number;
}

const computer: Computer = {
  id: 1,
  brand: "HP",
  ram: 8,
  storage: 2,
  upgradeRam(value) {
    return this.ram + value;
  },
};

// console.log(computer);
// console.log(computer.upgradeRam(8));

// Merge interfaces
interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: "cris",
  age: 29,
  getDetails() {
    return `My name is ${this.name}, Age: ${this.age}`;
  },
};

interface Employee extends Person {
  employeeId: number;
}

const employee: Employee = {
  employeeId: 1,
  name: "andres",
  age: 29,
  getDetails() {
    return `Name is ${this.name}, Age: ${this.age}, EmployeeID: ${this.employeeId}`;
  },
};

// console.log(person.getDetails());
interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager = {
  name: "bob",
  age: 35,
  dogName: "rex",
  getDogDetails() {
    return `Name is ${this.dogName}, Age: ${this.age}`;
  },
  getDetails() {
    return `Name is ${this.name}, Age: ${this.age}`;
  },
  managePeople() {
    return 5;
  },
};

