//The unknow type is Typescript is a type-safe counterpart of the any type.
//It's like saying that a variable could be anything, but we need to perform some type-checking before we can use it.

let unknowValue: unknown;

unknowValue = "Hello world";
unknowValue = [1, 2, 3];
unknowValue = 42.33455;

if (typeof unknowValue === "number") {
  unknowValue.toFixed(2);
}

function runSomeCode() {
  const random = Math.random();
  if (random < 0.5) {
    throw new Error("there was a error...");
  } else {
    throw "Some error...";
  }
}

try {
  runSomeCode();
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}
