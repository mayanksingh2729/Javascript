// Print the value if one argument is defied already

function sum(a,b=10){
    return a + b;
}
let a = 5;
let result = sum(a);
console.log(`The sum of ${a} and the default value is: ${result}`);