
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



function mystry() {
    var chooseNumber = function () {
        return 12;
    }

    return chooseNumber;

    var chooseNumber = function () {
        return 5;
    }
}

let nestedFn = mystry();

console.log(nestedFn());                // ?