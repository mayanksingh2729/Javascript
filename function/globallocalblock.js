let name1="Mayank"
function names(){
    if(true){
        let name2="Rajiv"
        var name3="Suraj"
        console.log(name2+"is block scope")
    }
    console.log(name3 +" is local scope")
}

console.log(name1+" is global scope")
names()