/* Type Aliases */

type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const createUser = (user: User): User => {
  return user;
};

const john: User = {
  id: 1,
  name: "john",
  isActive: true,
};

const susan: User = {
  id: 2,
  name: "susan",
  isActive: false,
};
/* 
console.log(createUser(john))
console.log(createUser(susan)) */

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "false";

type Theme = "light" | "dark";

let theme: Theme;
theme = "dark";

const setTheme = (t: Theme): void => {
  theme = t;
};

//setTheme("dark")

//chanllage

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Array<Employee>;
};

type Staff = Employee | Manager;

const printStaffDetails = (person: Staff): void => {
  //type guards => typeof, instance of, in , is
  if ("employees" in person) {
    console.log(
      `${person.name} is a manager with ${person.employees.length} employees.`
    );
  } else {
    console.log(
      `${person.name} is an employee and work in the ${person.department} department`
    );
  }
};

const alice: Employee = {
  id: 1,
  name: "alice",
  department: "Sales",
};

const steve: Employee = {
  id: 2,
  name: "steve",
  department: "HR",
};

const bob: Manager = {
  id: 3,
  name: "bob",
  employees: [alice, steve],
};

const person1: Staff = {
  id: 1,
  name: "Jon",
  department: "services",
  employees: [alice, steve],
};

printStaffDetails(person1);
printStaffDetails(steve);
