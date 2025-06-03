const prompt=require('prompt-sync')();

//calculator program using anonymous function
let add = function(a, b) {
    return a + b;
}

let subtract = function(a, b) {
    return a - b;
}

let multiply = function(a, b) {
    return a * b;
}

let divide = function(a, b) {
    return a / b;
}

let modulus = function(a, b) {
    return a % b;
}


let number1= parseInt(prompt("Enter first number: "));
let number2 = parseInt(prompt("Enter second number: "));
console.log(`
1. for Addition  
2. for Subtraction
3. for Multiplication
4. for Division
5. Modulus
`)
let operation = parseInt(prompt("Enter operation:"));
switch(operation) {
    case 1:
        console.log(`Result: ${add(number1, number2)}`);
        break;
    case 2:
        console.log(`Result: ${subtract(number1, number2)}`);
        break;
    case 3:
        console.log(`Result: ${multiply(number1, number2)}`);
        break;
    case 4:
        console.log(`Result: ${divide(number1, number2)}`);
        break;
    case 5:
        console.log(`Result: ${modulus(number1, number2)}`);
        break;
    default:
        console.log("Invalid operation");
}
