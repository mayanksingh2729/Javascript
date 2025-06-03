//use of charAt method
let str=prompt("Enter a String: ")
let value=parseInt(prompt("Enter a Index Value: "))
if(value >= 0 && value < str.length) {
    let char = str.charAt(value);
    console.log("The Value at Index " + value + " is: " + char);
} else {
    console.log("Invalid Index");
}
