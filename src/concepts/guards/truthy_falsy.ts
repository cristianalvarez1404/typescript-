//check for a truthy or falsy value
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log("no string provided");
  }
}

try {
  throw "another error";
  throw new Error("Error");
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log(error);
}

function checkInput(input: Date | string): string {
  if (input instanceof Date) {
    return input.getFullYear().toString();
  }
  return input;
}

const year = checkInput(new Date());
const random = checkInput("2020-05-05");

