//Generics => Allow us to write for example function with any data type
// let array1: string[] = ["Apple", "Banana", "Mango"];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];

let array1: Array<string> = ["Apple", "Banana", "Mango"];

function createString(arg: string): string {
  return arg;
}

function createNumber(arg: number): number {
  return arg;
}

function genericFunction<T>(arg: T): T {
  return arg;
}

const somethingValue = genericFunction<string>("Hello world");
const somethingValue2 = genericFunction<number>(123);

// console.log(somethingValue);
// console.log(somethingValue2);

interface GenericInterface<T> {
  value: T;
  getValue: () => T;
}

const genericString: GenericInterface<string> = {
  value: "hello",
  getValue() {
    return this.value;
  },
};

//What king of data return an async function? R// a promise
async function someFunc(): Promise<string> {
  return "Hello world";
}

const result = someFunc();

function createArray1(length: number, value: string): string[] {
  let result = Array(length).fill(value);
  return result;
}

function createArray2(length: number, value: number): number[] {
  let result = Array(length).fill(value);
  return result;
}

function createArray<T>(length: number, value: T): Array<T> {
  let result = Array(length).fill(value);
  return result;
}

// console.log(createArray<string>(3, "Hello"));
// console.log(createArray<number>(4, 100));

function pair<T, U>(param1: T, param2: U): [T, U] {
  return [param1, param2];
}

let resultt = pair<number, string>(123, "hello");
// console.log(resultt);

//Limit options in generics
function processValue<T extends string | number>(value: T): T {
  console.log(value);
  return value;
}

// processValue("2112");
// processValue(2025);

type Car = {
  brand: string;
  model: string;
};

const car: Car = {
  brand: "ford",
  model: "mustang",
};

type Product = {
  name: string;
  price: number;
};

const product: Product = {
  name: "shoes",
  price: 1.99,
};

type Student = {
  name: string;
  age: number;
};

const student: Student = {
  name: "peter",
  age: 20,
};

// function printName<T extends Student | Product>(input: T): void {
//   console.log(input.name);
// }
function printName<T extends { name: string }>(input: T): void {
  console.log(input.name);
}

// type data = {
//   name: string;
// };

// function printName(input: data): void {
//   console.log(input.name);
// }

// printName(student);
// printName(product);
// printName(car);

interface StoreData<T> {
  data: T[];
}

const storeNumbers: StoreData<number> = {
  data: [1, 2, 3, 4],
};

// const randomStuff: StoreData<number> = {
//   data: ["random", 1],
// };

// const randomStuff: StoreData<string> = {
//   data: ["random", 1],
// };
const randomStuff: StoreData<any> = {
  data: ["random", 1],
};
