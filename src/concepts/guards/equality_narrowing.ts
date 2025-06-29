//equality narrowing is a form of type narrowing that occurs when you use equality checks like === or !== in your code

type Dog = { type: "dog"; name: string; bark: () => void };
type Cat = { type: "cat"; name: string; meow: () => void };
type Animal = Dog | Cat;

function makeSound(animal: Animal) {
  if (animal.type === "dog") {
    animal.bark();
  } else {
    animal.meow();
  }
}

function makeSound2(animal: Animal) {
  if (animal.type !== "cat") {
    animal.bark();
  } else {
    animal.meow();
  }
}

function makeSound3(animal: Animal) {
  if ("bark" in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
