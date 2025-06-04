//self Invoking function

// (function name(){
//     console.log("Hello I am self Invokink Function")
// })()



let result=(function add(a,b){
    return a+b

})(10,20)

console.log(result);