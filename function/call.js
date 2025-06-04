//call function

let person1 = {
    name: "Mayank",
    result: function () {
        console.log(`Hello I am ${this.name}`);
    }
};

let person2 = {
    name: "Rajiv"
};

person1.result.call(person2);
