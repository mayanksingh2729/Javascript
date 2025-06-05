class student{
    constructor(fname,lname){
        this.fname=fname
        this.lname=lname
    }
    fullname(){
        return `First name: ${this.fname} Last name: ${this.lname}`
    }
}

let student1=new student("Mayank","Negi")
let student2=new student("Rajiv" , "Rajiv")
console.log(student1.fullname())
console.log(student2.fullname())
