//never => it is a type that represents the type of values that never occur.
//You can't assign any value to a variable of type never.

let someValue: never; // never assign it a value

type Theme = "light" | "dark";

function checkTheme(theme: Theme): void {
  if (theme === "light") {
    console.log("light theme");
    return;
  }

  if (theme === "dark") {
    console.log("dark theme");
    return;
  }
}

enum Color {
  Red,
  Blue,
  Green,
}

function getColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return "Red";
    case Color.Blue:
      return "Blue";
    default:
      return "No color";
  }
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Blue));
console.log(getColorName(Color.Green));
