let number = [1,2,3,4,5]
let fruits = ['apple','banana','orange'];

let mixedArray=[1, 'two', {name: 'alice'},[7,8,9]]

let firstNumber= number[0];
console.log(firstNumber);
let secondFruit= fruits[1];
let thirdElement = mixedArray[2];

number.push(6);
fruits.pop();
fruits.unshift('pear');
number.shift();

let numbers= [1,2,3,4,5];
numbers.forEach(function(number)
{

console.log(number);

});
let doubledNumbers= numbers.map(function(number)
{

return number * 2;


});
console.log(number);

const nums = [1,2,3,4,5,6];
 const evenNumbers = nums.filter(function(num)
 
 {
return num % 2 ===0;

 }
 
 );
 console.log(evenNumbers);