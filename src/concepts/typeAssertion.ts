//Type assertion => It's a way to tell the browser what type and existing variable is
//It's very handy with dom elements

let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;

type Bird = {
  name: string;
};

let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"Poodle"}';

let birdObj = JSON.parse(birdString);
let dogObj = JSON.parse(dogString);

let bird = birdObj as Bird;
let dog = dogObj as Bird;

console.log(bird.name);
console.log(dog.name);

enum Status {
  Pending = "pending",
  Declined = "declined",
}

type User = {
  name: string;
  status: Status;
};

const statusValue = "pending";

const user: User = { name: "john", status: statusValue as Status };

const btn = document.querySelector(".test-btn")!; //not null assertin. Tells to ts that this elements won't be null and other case we can to do this => bnt?.addEventListener()

const btn2 = document.querySelector<HTMLButtonElement>(".test-btn")!;
//It's important to define the type of selector, because querySelector it's a global element inteface

interface query<T> {
  querySearch(): T;
}

const app = <T>(id: T): T => {
  return id;
};

const app2: query<string> = {
  querySearch() {
    return "T";
  },
};

app<string>("1231");
