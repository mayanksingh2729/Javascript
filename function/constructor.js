//print using constructor

// function person(){
//     this.name="Mayank";
//     this.age=23;
// }
// let person1=new person()
// console.log(`Hello i am ${person1.name} and my age is ${person1.age}`);




function mobile(name,model){
    this.name=name;
    this.model=model;
    this.device=function(){
        console.log(`I have a mobile name ${this.name} its model is ${this.model}`)
    }
}
let mobile1=new mobile("Realme6","RMX")

mobile1.device()