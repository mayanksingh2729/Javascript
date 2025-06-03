let arr=["apple", "banana", "cherry", "grape", "kiwi", "mango","orange","papaya","strawberry", "watermelon"];

// some() method

const newfruit=arr.some((fruit)=>{
    return fruit.length<10
})
console.log(`Some fruit length is smaller than 10: ${newfruit}`);