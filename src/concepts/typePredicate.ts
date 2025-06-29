//***************IS************
//type predicate => function whose return type that can be used to narrow down types within conditional blocks.

//function that asserts that a value has a specific type.

type Student = {
  name: string;
  study: () => void;
};

type User = {
  name: string;
  login: () => void;
};

type Person = Student | User;

const randomPerson = (): Person => {
  return Math.random() > 0.5
    ? { name: "john", study: () => console.log("student") }
    : { name: "mary", login: () => console.log("logging in") };
};

// const person = randomPerson()

function isStudent(person: Person): person is Student {
  return (person as Student).study !== undefined;
}
