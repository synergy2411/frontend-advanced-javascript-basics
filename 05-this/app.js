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


