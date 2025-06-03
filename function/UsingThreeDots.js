//print the valur using ellipsis operator (...)

const num = (...numbers) => {
    for(let i = 1; i <= numbers.length; i++) {
        console.log(`${numbers[i]}`)

    }
}


num(1,2,3,4,5,6,7,8,9,10);