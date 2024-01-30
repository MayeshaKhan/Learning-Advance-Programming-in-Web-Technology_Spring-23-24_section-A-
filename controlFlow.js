let age =16;
if(age >=18){
console.log("Adult");
}
else if(age >=13)
{
    console.log("Teenager");
}
else
console.log("Minor");
let status; 
switch(true)
{
    case age >= 18:
        status= "Adult";
        break;
    case age >=13:
        status= "Teenager";
        break;
    default:
        status= "Minor";
        
}
console.log(status);

//Loops
//For loop
let x= [ 'a', 'b','c','d','e'];
for (let i = 0; i<3;i++)
{
    console.log(x[i]);
   
}
//While Loop
let i = 0;
while(i<4)
{
    console.log(x[i]);
    i++;
}
//do-while loop
let j = 0;
do{
    console.log(x[j]);
    j++;
}
while (j<2);
//for-in loop
for (let i of x)
{
    console.log(x[i]);
}
//fpr-of loop
for (let i of x)
{
    console.log(i);
}

