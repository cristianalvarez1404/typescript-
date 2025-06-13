/* Union types */

let tax: number | string = 10;
tax = 100;
tax = "$10";

let requestStatus: "pending" | "success" | "error" = "pending";
requestStatus = "success";

let notSure: any = 4;
let random;

const books = ["1984", "Brave New World", "Fahrenheit 451"];

let foundBook: string | undefined;

for (let book of books) {
  if (book === "1983") {
    foundBook = book;
    foundBook.length;
    break;
  }
}

//optional chanining => only run length if it is a string
foundBook?.length;

//literal types
let orderStatus: "processing" | "shipped" | "delivered" = "processing";
orderStatus = "shipped";

//arrays
let prices: number[] = [100, 75, 42];
let fruits: string[] = ["apple", "orange"];
let randomValues: [] = []; // empty array
let emptyValues: number[] = [];
let array: (string | number)[] = [123, "false"];

let temperatures: number[] = [20, 25, 30];
let temperatures2: Array<number> = [];
let colors: string[] = ["red", "green", "blue"];
// colors.push(true);
let mixedArray: (number | string)[] = [1, 2, "three"];
