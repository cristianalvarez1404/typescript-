//tuples
let person: [string, number] = ["john", 25];
let date: [number, number, number] = [12, 17, 2001];
let date2: readonly [number, number, number] = [12, 17, 2001];
// date2.push(2025);

function getPerson(): [string, number] {
  return ["john", 25];
}

let randomPerson = getPerson();
let susan: [string, number?] = ["susan", 46];

//enums => Define a set of named constants

enum ServerResponseStatus {
  Success = 200,
  Error = 404,
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === "number") {
    console.log(value);
  }
});

console.log("***********************");
console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ["first item", "second item"],
  };
}

const response: ServerResponse = getServerResponse();

enum UserRole {
  Admin,
  Manager,
  Employee,
}

type User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, string];
};

function createUser(user: User): User {
  return user;
}

const newUser: User = createUser({
  id: 1,
  name: "cris",
  role: UserRole.Admin,
  contact: ["info@gmail.com", "11-22-33"],
});

console.log(newUser);
