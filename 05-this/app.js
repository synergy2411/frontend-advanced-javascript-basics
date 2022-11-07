// Method -> this = Object that is calling the method
// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     getDetails: function () {
//         // console.log(this);          // user object
//         return this.firstName + " " + this.lastName;
//     }
// }


// console.log(user.getDetails())




// Simple function call ->  this = undefined / window

// function Student() {
//     console.log(this);
// }

// Student()           // Window Object
















// Arrow functions -> this = ‘this’ of surrounding function (lexical this)

// Case 01 - nested function declaration

// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     getDetails: function () {
//         // console.log(this);          // user object
//         let that = this;

//         function nestedFn() {
//             console.log(that.firstName + " " + that.lastName);
//         }
//         return nestedFn;
//     }
// }


// Case 02 - nested Arrow function

// let user = {
//     firstName: "John",
//     lastName: "Doe",
//     getDetails: function () {
//         console.log(this);      // user object
//         let nestedFn = () => console.log(this.firstName + ", " + this.lastName)
//         return nestedFn;
//     }
// }


// let nestedFn = user.getDetails()

// nestedFn();

















// Event listener -> this = DOM element that the handler is attached to

// const btnAdd = document.getElementById("btnAdd");
// const txtInput = document.querySelector("#txtInput");

// 'this' reference is lost when arrow function
// is used as event handler

// txtInput.addEventListener("keyup", () => {
//     console.log(this);
// })

// txtInput.addEventListener("keyup", function () {
//     console.log(this);
// })


// btnAdd.addEventListener("click", function () {
//     // console.log(this);
//     this.style.border = 'none';
//     this.style.backgroundColor = "teal"
//     this.style.padding = "10px"
//     this.classList.add("border")
//     this.classList.remove("feature")
// })

















// call, apply, bind -> change the function ‘this’ context




// function getDetails(lang, options) {
//     if (lang === "Spanish") {
//         return "Hola " + this.firstName + ", " + this.lastName;
//     } else {
//         return "Hello " + this.firstName + ", " + this.lastName;
//     }
// }

// let userOne = {
//     firstName: "John",
//     lastName: "Doe"
// }

// let userTwo = {
//     firstName: "Jenny",
//     lastName: "Doe"
// }

// bind : returns the bounded function with new object
// let boundedFn1 = getDetails.bind(userOne)
// let boundedFn2 = getDetails.bind(userTwo)

// console.log(boundedFn1())
// console.log(boundedFn2())


// call : calls function immediately with new context
// - supply arguments as individual parameters

// console.log("CALL :", getDetails.call(userOne, "English", true))
// console.log("CALL :", getDetails.call(userTwo, "Spanish", false))


// apply : calls funtion immediately with new context
// - supply arguments as an Array

// console.log("APPLY : ", getDetails.apply(userOne, ["Spanish", true]))
// console.log("APPLY : ", getDetails.apply(userTwo, ["English", false]))


// function mul(x,y, z){
//     return x * y * z;
// }

// mul(5,6,7);


// Partial & Currying : Calling the function partially
// function mul(x) {
//     return function (y) {
//         return function (z) {
//             return x * y * z;
//         }
//     }
// }

// console.log(mul(2)(3)(4));

// const firstNestedFn = mul(5)

// const secondNestedFn = firstNestedFn(3)

// console.log(secondNestedFn(2))          // 30


// const mulFour = firstNestedFn(4)

// console.log( mulFour(3));               // 5 * 4 * 3


// console.log(mulFour(6));                // 5 * 4 * 6
