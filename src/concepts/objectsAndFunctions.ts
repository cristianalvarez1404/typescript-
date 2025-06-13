let car: { brand: string; year: number } = {
  brand: "toyota",
  year: 2020,
  // color: "blue",
};

car.brand = "ford";
// car.color = 'blue'

let book = { title: "book", cost: 20 };
let pen = { title: "pen", cost: 10 };
let notebook = { title: "notebook" };

//optional properties and readonly(you cantn change the value)
let items: { readonly title: string; cost?: number }[] = [book, pen, notebook];

/*** FUNCTIONS ***/

function sayHi(name: string) {
  console.log(`Hello there ${name.toUpperCase()}`);
}

// any
// config
// type
sayHi("cristian");
// sayHi(3);
