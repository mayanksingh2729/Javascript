function student(name,age){
    this.name=name
    this.age=age
    this.course=function(){
        return `I am ${this.name} and a ${this.age} old boy`
    }
}

let details=new student("Mayank", 23)
console.log(details.course());