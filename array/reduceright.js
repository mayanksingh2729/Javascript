let arr=["apple", "banana", "cherry", "grape", "kiwi", "mango","orange","papaya","strawberry", "watermelon"];


// reduceRight() method

const newfruits=arr.reduceRight((accumulator,fruit)=>{
    return accumulator + " " + fruit;
})
console.log(`display the fruit from right to left: ${newfruits}`);