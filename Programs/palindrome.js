const prompt = require("prompt-sync")();

//Palindrome Number

let num=parseInt(prompt("Enter a number: "))
let original=num
let reverse=0

while (num!=0){
    let digit=num%10
    reverse=reverse*10+digit
    num=Math.floor(num/10)
}
if(original==reverse){
    console.log("The Number is Palindrome")
}else{
    console.log("The Number is not Palindrome")
}