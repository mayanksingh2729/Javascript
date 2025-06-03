const prompt = require('prompt-sync')();

//print the value of two numbers using return

const num=(num1,num2)=>{
    return num1+num2
}
number1=parseInt(prompt("Enter first number: "));
number2=parseInt(prompt("Enter second number: "));
console.log(num(number1,number2));
