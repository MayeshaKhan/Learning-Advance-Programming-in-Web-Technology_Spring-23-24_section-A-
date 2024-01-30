//global variable
const globalVariable= "I am Global";

function exampleFunction()
{
    console.log(globalVariable);
}
exampleFunction();

//local variable
function exampleFunction()
{
    const localVariable= "I am local";
    console.log(locallVariable);
}
exampleFunction();

//example of different local variable
function createcCounter()
{
    let count = 0;
    return function()
    {
        count++;
        console.log(count);
    };

}
const counter = createCounter();
counter();
counter();
counter();