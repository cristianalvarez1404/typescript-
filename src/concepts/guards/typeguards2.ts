//Type guarding refers to the hability to narrow down the type of an object within a certain scope.
//This is done using conditional statments that checks the type of an object.

//Type guard is some expression thtat performs a runtime check that guarantess the type in some scope.

type ValueType = string | number | boolean;

let value: ValueType;

function checkValue(value: ValueType) {
  if (typeof value === "string") {
    console.log(value.toLowerCase());
  }
  if (typeof value === "number") {
    console.log(value.toFixed(2));
  }
  console.log(value);
}
