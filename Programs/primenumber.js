const prompt = require("prompt-sync")();

//Prime Number

const num = parseInt(prompt("Enter a number: "));
if (num <= 1) {
    console.log("The Number is not a Prime Number");
}
else {
    let count = 0;
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            count++
        }
    }
    if (count === 0) {
        console.log("The Number is a Prime Number");
    }
    else {
        console.log("The Number is not a Prime Number");
    }
}