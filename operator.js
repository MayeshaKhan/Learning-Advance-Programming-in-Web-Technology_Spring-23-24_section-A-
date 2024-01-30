let age = 20;
//conditional operator 
//condition ? expr1 : expr2
let status= (age>= 18) ? "Adult" : "Minor";

//sperad operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1];

let arr3 = [4, 5, 6];
let combinedArray= [...arr1, ...arr3];

let newArr = [0, ...arr1, 4]

function sum(a,b,c)
{
    return a + b + c;
}

let numbers = [1, 2, 3]
let result = sum(...numbers);

//rest operator
function sum(...numbers)
{
    let = 0;
    for (let number of numbers){
        total+=number;
    }
    return total;
}
let result2 = sum(1,2,3,4,5)
console.log(result);

result = sum(10,20);
console.log(result);

