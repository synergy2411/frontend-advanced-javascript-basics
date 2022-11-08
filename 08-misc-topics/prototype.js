// function Person(name, email, age) {
//     this.name = name;
//     this.email = email;
//     this.age = age;

//     // this.getDetails = function () {
//     //     return `Hello, I'm ${this.name}, I'm ${this.age} years old`
//     // }

//     // Will occupy memory for each object created
//     this.sayHello = function () {
//         return "Hello"
//     }
// }

// // Won't occupy additional memory area
// Person.prototype.getDetails = function () {
//     return `Hello, I'm ${this.name}, I'm ${this.age} years old, AGAIN`
// }

// let userOne = new Person("John Doe", "john@test", 32);
// console.log(userOne.getDetails())

// let userTwo = new Person("Jenny Doe", "jenny@test", 29);
// console.log(userTwo.getDetails())




// Extending the existing constructor

String.prototype.numberOfOccurence = function (letter) {
    let count = 0;
    for (let i = 0; i < this.length; i++) {
        if (this.charAt(i).toLowerCase() === letter.toLowerCase()) {
            count++;
        }
    }
    return count;
}

let strOne = "String one";
let strTwo = "Hello World";

console.log(strOne.numberOfOccurence("i"));          // 1
console.log(strTwo.numberOfOccurence("O"));          // 2