const prompt = require("prompt-sync")();

//Factorial Program

const num=parseInt(prompt("Enter a number: "));
let fact=1;
if(num<=0)
{
    console.log("The Number is not valid for Factorial");
}
else{
    for (i=1;i<=num;i++){
        fact=fact*i;
    }
    console.log("The Factorial is "+ fact);
}
