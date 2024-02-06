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
//Built in types
//any
var data;
data = 'Something';
console.log(data);
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
console.log(color);
//tuple
var employee;
employee = [1, "Steve"];
console.log(employee);
//array
var numbers = [1, 2, 3, 4, 5];
var firstElement = numbers[0];
console.log(firstElement);
//array length
var arrayLength = numbers.length;
//adding numbers
numbers.push(6);
//iterating through element
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var num = numbers_1[_i];
    console.log(num);
}
//array methods
var doubledNumbers = numbers.map(function (num) { return num * 2; });
console.log(doubledNumbers);
var evenNumbers = numbers.filter(function (num) { return num % 2 == 0; });
console.log(evenNumbers);
var sum = numbers.reduce(function (prev, next) { return prev + next; });
console.log(sum);
