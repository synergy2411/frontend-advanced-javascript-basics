
// Function Declaration / Syntax
// function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(add(3, 4));


// Function Expression
// let addition = function (n1, n2) {
//     return n1 + n2;
// }

// console.log(addition(2, 4));      // ?


// Supply the function as parameter

// function greet() {
//     console.log("Hola")
// }


// Higher Order Function
// function greetSpanish(arr, cb) {
//     console.log("Greeting....")
//     if (arr.length > 2) {
//         cb(null, "too many arguments");
//     } else {
//         cb(new Error("Too less arguments"))
//     }
// }


// greetSpanish([1, 2], function (error, message) {
//     console.log("Hello")
//     if (error) {
//         console.log(error)
//     } else {
//         console.log(message)
//     }
// })



// function mystry() {
//     // function chooseNumber() {
//     //     return 12;
//     // }
//     // return chooseNumber;

//     return function () {
//         return 7;
//     }
// }

// // console.log(mystry())

// let nestedFn = mystry()

// console.log(nestedFn())



// function mystry() {
//     var chooseNumber = function () {
//         return 12;
//     }

//     return chooseNumber;

//     var chooseNumber = function () {
//         return 5;
//     }
// }

// let nestedFn = mystry();

// console.log(nestedFn());                // ?




// var x = 101;

// function a() {
//     // console.log(x);         // ?
//     ++x;
// }


// a();

// console.log(x);



// Lexical scoping

// var x = 99;

// function a() {
//     // var x = 201;
//     function b() {
//         // var x = 199;
//         console.log(x)          // ?
//     }
//     b()
// }

// a();



// let x = 101;
// function b() {
//     // let x = 198;
//     console.log(x);     // ?
// }
// function a() {
//     let x = 99;
//     b()
// }

// a();    


// CLOSURE - the process of binding outer scope variables with inner functions


// function testClosure() {
//     let x = 4;
//     return function () {
//         return ++x;
//     }
// }

// let nestedFn = testClosure()

// console.log(nestedFn());            // 5
// console.log(nestedFn());            // ?
// console.log(nestedFn());            // ?



// function buildTicket(transport) {
//     let numOfPassgers = 0;
//     return function (passengerName) {
//         return `
//         Hello Mr/Ms. ${passengerName},
//         You're going via ${transport}.
//         Your ticket ID #${++numOfPassgers}
//         `
//     }
// }


// let shipFn = buildTicket("Ship")

// console.log(shipFn("John"));
// console.log(shipFn("Jenny"));

// let airFn = buildTicket("Air");
// console.log(airFn("Alice"));




// Arrow function : one-liner functions; 
// short and clean syntax
// Two flavours
// - Without Curly brace 
//  - write one line in fnBody
//  - need not to mention 'return' keyword
// - With Curly brace
//  - Multiline FnBody
//  - explicitly mention "return" keyword
// fnArgs => fnBody

// Function Declaration
// function add (n1, n2){
//     return n1 + n2;
// }

// Function Expression
// let add = function(n1, n2){ return n1 + n2; }

// Arrow Function
// let add = (n1, n2) => n1 + n2;
// let add = (n1, n2) => {
//     if(n1 > 0 && n2 > 0){
//         return n1 + n2;
//     }
// };

// console.log(add(2, 5));


// let square = value => value * value;


let numbers = [2, 4, 6, 8];

numbers.map(function (value) {
    return value * 2;
})

numbers.map(value => value * 2);

numbers.filter(value => value > 3)