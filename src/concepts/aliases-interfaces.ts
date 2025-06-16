/* Type Aliases */

type User = {
    id:number;
    name:string;
    isActive:boolean
}

const createUser = (user:User):User => {
    return user;
}

const john:User = {
    id:1,
    name:"john",
    isActive:true
}

const susan:User = {
    id:2,
    name:"susan",
    isActive:false
}
/* 
console.log(createUser(john))
console.log(createUser(susan)) */

type StringOrNumber = string | number;

let value:StringOrNumber;
value = "false"

type Theme = 'light' | 'dark'

let theme:Theme;
theme = "dark"

const setTheme = (t:Theme):void => {
    theme = t;
}

//setTheme("dark")


//chanllage

type Employee = {
    id:number;
    name:string;
    department:string
}

type Manager = {
    id:number;
    name:string;
    employees:Array<Employee>
}

type Staff = Employee | Manager


const printStaffDetails = (person:Staff) => {
    //type guards => typeof, instance of, in , is
    if('employees' in person){
        console.log(`${person.name} is a manager with ${person.employees.length} employees.`)
    }
    else {
        console.log(`${person.name} is an employee and work in the ${person.department} department`)
    }
}

const person1:Staff = {
    id:1,
    name:"Jon",
    department:"services",
    employees:[
        {
            id:2,
            name:"sara",
            department:"services 2"
        },
        {
            id:3,
            name:"rene",
            department:"services 3"
        }
    ]
}

printStaffDetails(person1)