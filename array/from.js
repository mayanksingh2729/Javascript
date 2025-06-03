let arr=["apple", "banana", "cherry", "grape", "kiwi", "mango","orange","papaya","strawberry", "watermelon"];



// from() method

const newfruit=Array.from((arr),fruit =>{
    return fruit.toUpperCase()
})
console.log(`Fruits: ${newfruit}`);
