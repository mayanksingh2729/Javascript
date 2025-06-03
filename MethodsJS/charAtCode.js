//use of charAtCode method
let str=prompt("Enter a String: ")
let value=parseInt(prompt("Enter a Index Value whose code you want to find: "))
if(value >= 0 && value < str.length) {
    let charCode = str.charCodeAt(value);
    console.log("The Character Code at Index " + value + " is: " + charCode);
}
else {
    console.log("Invalid Index");
}