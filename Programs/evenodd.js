const prompt = require("prompt-sync")();

//Even Odd Program

const evenodd=(num)=>{
    if (num%2==0){
        console.log("The Number is Even")
    }
    else{
        console.log("The Number is Odd")
    }
};
const num=parseInt(prompt("Enter a number: "));
evenodd(num);

