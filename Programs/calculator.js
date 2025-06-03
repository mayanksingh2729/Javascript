const prompt=require("prompt-sync")();

add=(num1,num2)=>{
    let num3=num1+num2;
    return num3;
}

sub=(num1,num2)=>{
    let num3=num1-num2;
    return num3;
}

multi=(num1,num2)=>{
    let num3=num1*num2;
    return num3;
}

divide=(num1,num2)=>{
    let num3=num1/num2;
    return num3;
}


const number1=parseInt(prompt("Enter the Number 1:- "));
const number2=parseInt(prompt("Enter the Number 2:- "));

const operation=parseInt(prompt(` 
                        1.Addition
                        2.Subtraction
                        3.Multiplication
                        4.Division
                        Enter the Operation you want to perform:- `));
switch (operation)
 {
    case 1:
        console.log("The Addition of " + number1 + " and " + number2 + " is:- " + add(number1, number2));
        break;
    case 2:
        console.log("The Subtraction of " + number1 + " and " + number2 + " is:- " + sub(number1, number2));
        break;
    case 3:
        console.log("The Multiplication of " + number1 + " and " + number2 + " is:- " + multi(number1, number2));
        break;
    case 4:
        console.log("The Division of " + number1 + " and " + number2 + " is:- " + divide(number1, number2));
        break;
    
        default:
            console.log("Invalid Operation! Please enter a valid operation number");
            break;

}


