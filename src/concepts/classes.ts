// class Book {
//   public readonly title: string;
//   public author: string;
//   private checkedOut: boolean = false;

//   constructor(title: string, author: string) {
//     this.title = title;
//     this.author = author;
//   }

//   public checkOut() {
//     this.checkedOut = this.toggleCheckedOutStatus();
//   }

//   public isCheckedOut() {
//     return this.checkedOut;
//   }

//   private toggleCheckedOutStatus() {
//     return !this.checkedOut;
//   }
// }

// const deepWork = new Book("Deep Work", "Cal Newport");
// deepWork.checkOut();
// deepWork.checkOut();
// deepWork.checkOut();
// console.log(deepWork.isCheckedOut());

class Book {
  private checkedOut: boolean = false;

  constructor(
    readonly title: string,
    public author: string,
    private someValue: number
  ) {}

  public getSomeValue() {
    return this.someValue;
  }

  get info() {
    return `${this.title} by ${this.author}`;
  }

  set checkOut(checkedOut: boolean) {
    this.checkedOut = checkedOut;
  }

  get checkOut() {
    return this.checkedOut;
  }

  public get someInfo() {
    this.checkOut = true;
    return `${this.title} by ${this.author}`;
  }
}

const deepWork = new Book("Deep Work", "Cal Newport", 123);
console.log(deepWork.getSomeValue());
deepWork.info;
deepWork.checkOut = true;
console.log(deepWork.info);

/**************************************** */

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person implements IPerson {
  constructor(public name: string, public age: number) {}

  public greet() {
    console.log(`Hello name is ${this.name} and I'm ${this.age} years old`);
  }
}

const hipster = new Person("shakeAndBake", 100);
hipster.greet();
