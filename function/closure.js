function person(){
    let name="Mayank"

    function person1(){
        console.log(`My name is ${name}`)
    }
    return person1
}

let person3=person()
person3()