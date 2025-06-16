function calculateDiscount(price:number):number{
    const hasDiscount = false;

    if(hasDiscount){
        return price;
        //return 'Discount applied';}
    }
    return price * 0.9;
}

//const finalPrice = calculateDiscount(200)

function addThree(number:any){
    let anotherNumber:number = 3
    return number + anotherNumber
}

const result = addThree(3);
const someValue = result;

//challenge
const arr:Array<string> = ['cristian','andres','alvarez']

const isNameInList = (name:string):boolean => {
    return arr.includes(name)
}

let nameToCheck = 'jane'

/* isNameInList(nameToCheck)
    ? console.log(`${nameToCheck} is in the list`)
    : console.log(`${nameToCheck} is not in the list`)
 */

function calculatePrice(price:number, discount?:number):number{
    /* if(discount)
        return price - discount
    return price */
    return price - (discount || 0)
}

let priceAfterDiscount = calculatePrice(100,20)


function calculateScore(initialScore:number, penaltyPoints:number = 0):number{
    return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateScore(100,200)
let scoreWithoutPenalty = calculateScore(300)

function sum(message:string,...numbers:Array<number>):string{
    const double = numbers.map((num) => num * 2)
    
    let total = numbers.reduce((prev, acc) => prev + acc,0)

    return message + " " + total
}

let result1 = sum('The total is : ',1,2,3,4,5)
//console.log(result1)


const logMessage = (message:string):void => {
    console.log(message)
}

//logMessage('Hello typescript')

const processInput = (num:string | number):void => {
    if(typeof num == "number"){
        console.log(num * 2)
    }
    else{
        console.log(num.toUpperCase())
    }
}

/* processInput(5)
processInput('hello')
 */

function createEmployee({id}:{id:number}):{id:number;isActive:boolean}{
    return {
        id,
        isActive:id % 2 === 0
    }
}

const first = createEmployee({id:2})
//console.log(first)


function createStudent(student:{id: number;name:string}):void{
    console.log(`Welcome to the course ${student.name}`)
}

const newStudent = {
    id:4,
    name:"Anna"
}

//createStudent({id:2,name:"cristian"})
//createStudent(newStudent)



const processDate = (input:string | number, config:{reverse:boolean}={reverse:false}) => {
    if(typeof input === "number"){
        return input ** 2
    }
    if(typeof input === "string" && config.reverse){
        return(input.toUpperCase().split('').reverse().join('').toString())
    }
    if(typeof input === "string"){
        return input.toUpperCase()
    }
}

/* const result33:string | number | undefined = processDate(5,{reverse:false})
console.log(result33)
*/
