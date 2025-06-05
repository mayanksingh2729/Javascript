//create a function using bind
function person(name,place){
    console.log(`my name is ${name} and i am ${this.age} year old live in ${place}`)
}

let person1={ age:23}

let person2=person.bind(person1,"Mayank","Mohali")
person2();