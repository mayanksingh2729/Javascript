const prompt = require("prompt-sync")();

//pascal triangle

function generatepascalstriagle(n){
    const triangle=[]
    for (let i=0;i<n;i++){
        triangle [i]=[];
        triangle[i][0]=1;
        for (let j=1;j<=i;j++){
            triangle[i][j]=triangle[i-1][j-1]+triangle[i-1][j]
        }
        triangle [i][i]=1;
    }
    return triangle;
}

function printpascaltriangle(triangle){
    for(let i=0;i<triangle.length;i++){
        console.log(" ".repeat((triangle.length-i-1)*3) + triangle[i].join("  ".repeat (3)));
    }
}
 const numrows=5;
const pascalTriangle = generatepascalstriagle(numrows);
printpascaltriangle(pascalTriangle);