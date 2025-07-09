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

const btn2 = document.querySelector<HTMLButtonElement>(
  ".test-btn"
)! as HTMLButtonElement;
//It's important to define the type of selector, because querySelector it's a global element inteface

btn2.disabled = false;

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

const taskForm = document.querySelector<HTMLFormElement>(".form");
const formInput = document.querySelector<HTMLInputElement>(".form-input")!;
const taskListElement = document.querySelector<HTMLUListElement>(".list");

type Task = {
  description: string;
  isCompleted: boolean;
};

const tasks: Task[] = loadTasks();

tasks.forEach(renderTask);

function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  return storedTasks ? JSON.parse(storedTasks) : [];
}

function createTask(event: SubmitEvent) {
  event.preventDefault();
  const taskDescription = formInput.value;
  if (taskDescription) {
    formInput.value = "";
    return;
  }
  alert("Please enter the task description");
}

taskForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const taskDescription = formInput.value;
  if (taskDescription) {
    const task: Task = {
      description: taskDescription,
      isCompleted: false,
    };
    //add task to list
    addTask(task);
    //render task
    renderTask(task);
    //update local storage
    updateStorage();
    formInput.value = "";
    return;
  }
  alert("Please enter the task description");
});

function addTask(task: Task): void {
  tasks.push(task);
}

function renderTask(task: Task): void {
  const taskElement = document.createElement("li");
  taskElement.textContent = task.description;

  // checkbox
  const taskCheckbox = document.createElement("input");
  taskCheckbox.type = "checkbox";
  taskCheckbox.checked = task.isCompleted;

  //toogle checkbox
  taskCheckbox.addEventListener("change", () => {
    task.isCompleted = !task.isCompleted;
    updateStorage();
  });

  taskElement.appendChild(taskCheckbox);
  taskListElement?.appendChild(taskElement);
}

function updateStorage(): void {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
