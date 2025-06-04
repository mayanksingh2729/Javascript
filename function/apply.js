//apply function

function person(name){
    console.log(`Hello i am ${name} from ${this.location} `)
}

let person1={location:"Mohali" }

person.apply(person1,["Mayank"])