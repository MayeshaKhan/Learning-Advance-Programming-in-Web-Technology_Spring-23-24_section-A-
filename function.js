function greet(name)
{

console.log('Hello,${name}!');
}
greet("Alice");

//function return
function sum(a,b)
{
        return a + b;
}
let result = sum (1,2);

console.log(result);
//arrow function 

let greet = name => console.log('Hello,${name}!');
greet("BOB");

//anonymous function 
const greet = function(name)
{
    console.log('Hello,${name}!');
}
greet("Alice");

//function as a parameter
function operateNumbers(a,b, operation)
{
    return operation(a,b);
}
function add(x,y)
{

    return x + y;
}
function multiply(x,y)
{

    return x * y;
}

let resultAddition = operateOnNumbers(5,3,add);
let resultMultiplication = operateOnNumbers(5,3,multiply);

