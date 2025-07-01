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

// Discriminated Unions and exhastive check using the never type
//type that can be one of several diffent types, each identified by a unique literal property (The descriminator), allowing for type-safe handling of each possible variant.

type IncrementAction = {
  type: "increment";
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: "decrement";
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action) {
  switch (action.type) {
    case "increment":
      return state + action.amount;
    case "decrement":
      return state - action.amount;
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected action ${unexpectedAction}`);
  }
}

const newState = reducer(15, {
  type: "increment",
  user: "jon",
  amount: 5,
  timestamp: 123456,
});
