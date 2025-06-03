const prompt = require("prompt-sync")();

//Fibonacci Series

let num=parseInt(prompt("Enter the number you want to print:- "))

let first=0,second=1

for(i=0;i<=num;i++){
    console.log(first)
    let next=first+second
    first=second
    second=next
}