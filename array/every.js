let arr=["apple", "banana", "cherry", "grape", "kiwi", "mango","orange","papaya","strawberry", "watermelon"];


//every() method

const newfruit=arr.every((fruit)=>{
    return fruit.length<10
})
console.log(`Every fruit length is smaller than 10: ${newfruit}`);