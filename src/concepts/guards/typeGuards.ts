// Type guards

function getEmployee(): Person | DogOwnwer | Manager {
  const random = Math.random();

  if (random < 0.33) {
    return {
      name: "cris",
    };
  } else if (random < 0.66) {
    return {
      name: "sara",
      dogName: "rex",
    };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Managing...");
      },
      delegateTasks() {
        console.log("Delegeting...");
      },
    };
  }
}

interface Person {
  name: string;
}

interface DogOwnwer extends Person {
  dogName: string;
}

interface Manager extends Person {
  managePeople(): void;
  delegateTasks(): void;
}

const employee: Person | DogOwnwer | Manager = getEmployee();

function isManager(obj: Person | DogOwnwer | Manager): obj is Manager {
  return "managePeople" in obj;
}

console.log(isManager(employee));
