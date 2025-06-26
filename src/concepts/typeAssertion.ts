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

