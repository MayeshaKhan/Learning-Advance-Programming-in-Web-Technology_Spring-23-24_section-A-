// //declaration
// let a: number = 10
// let b: string = "Hello "
// let c: boolean =true;

// //function
// function add(a: number, b: number): number{
//     return a+b;

// }
// console.log(add(10,20));

// //type alias
// type Person = {id : number, name: string}
// let p: Person = {id: 1 , name: "John"}
// console.log(p)

// //type union
// let y: number | string;
// y = 10;
// console.log(y)

// //literal type
// let z: "Red" | "Green" | "Blue";
// z ="Red"
// console.log(z)

// //Built in types
// //any
// let data: any;
// data = 'Something'
// console.log(data)

// //enum
// enum Color {Red, Green, Blue}
// let color: Color = Color.Red;
// console.log(color);

// //tuple
// let employee: [number, string]
// employee = [1, "Steve"]
// console.log(employee)

// //array
// let numbers: number[] = [1,2,3,4,5]
// let firstElement: number = numbers[0]
// console.log(firstElement)
// //array length
// let arrayLength: number = numbers.length;
// //adding numbers
// numbers.push(6);
// //iterating through element
// for(let num of numbers)
// {
//     console.log(num)
// }

// //array methods
// let doubledNumbers: number[]= numbers.map((num: number )=> num * 2)
// console.log(doubledNumbers)
// let evenNumbers: number[] = numbers.filter((num: number) =>num % 2 == 0)
// console.log(evenNumbers)
// let sum: number = numbers.reduce((prev: number, next: number)=>prev + next)
// console.log(sum)

//arrow function
let addNumbers=(a: number, b: number): number => a+ b
console.log(addNumbers(10, 20))

//optional parameters
function addNum1(a: number, b: number, c?: number): number{
    return a + b + (c ?? 0);

}
function addNum2(a: number, b: number, c: number=0):  number {

       return a + b + c
}

function addNum3(...nums:number[]): number 
{
    let sum: number = 0;
    for( let num of nums)
    {
        sum += num;
    }

    return sum;
}

//function overloading

function addNumbers2(a: number, b: number): number;
function addNumbers2(a: string, b:string): string;
function addNumbers2(a:any, b:any) : any
{
    return a+b;
}

console.log(addNumbers2(10,20));

