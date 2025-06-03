const prompt = require("prompt-sync")();

//find Largest number among the given list

let num=parseInt(prompt("Enter the number of elements:- "))
let arr=[]

for(let i=0;i<num;i++){
    let number=parseInt(prompt("Enter the number:- "))
    arr.push(number)
}

let large=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]>large){
        large=arr[i];
    }
}
console.log("The Largest Number is:- "+large);