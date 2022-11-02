// let, const, var

// Global Scope
// var z = 202;

// function demo(arr) {
//     if (arr.length > 2) {
//         var flash = "FLASHING";
//         console.log(load);          // ?
//     } else {
//         var load = "LOADING";
//     }
// }

// console.log(load);

// demo([1, 2, 3, 4]);



// Block scoped variables - let & const

// function demo(arr) {
//     if (arr.length > 2) {
//         const flash = "Flashing";
//         console.log(load);
//     } else {
//         const load = "Loading"
//     }
// }

// demo([1, 2, 3, 4])



// CONST

// Always initialize value to const variables
// Const variables can't be changed / re-assigned
// Const are NOT immutable

// const username = "John Doe";

// username = "Jenny Doe";

// const age;

// age = 32;

// const user = {
//     name: "John"
// }

// console.log(user.name);         // John

// user.name = "Jenny";

// console.log(user.name);         // Jenny

// // Chnage the value of user
// user = {
//     name: "Alice"
// }

// console.log(user.name);        // ?


// const arr = ["apple", "guava", "banana"];

// arr.push("kiwi");

// console.log(arr.length);        // 4

// // Changing the arr reference - NOT permitted
// arr = ["apple", "guava", "banana", "kiwi"];



// console.log(x);

// var x = 101;


// console.log((3 < 2 < 1) === false);         // ?



// TEMPLATE STRING LITERALS

// Back Tick ( ` ` )

// - Embed variables within string without concatenate operator ( + )
// - Multiline string support without the need of new line operator (\n)

// let name = "Monica";
// let age = 32;

// let result = `

// Hello from ${name}

// I'm ${age} years old!

// `;

// console.log(result);




// Short-circuit operator -
// && - recommend to use
// || -

// let x = 5, y = 3, z = 2;

// if (x > y || y > z) {
//     console.log("It works");
// }

// let fruit = "orange";

// fruit = (3 > 2 && "Banana");
// fruit = (3 > 2 ? "Banana" : "");

// fruit = (3 < 2 || "Banana");
// fruit = (3 < 2 || 0);
// fruit = (3 < 2 || false);

// console.log(fruit);



// Loops

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for...of (works with array)

// let friends = ["Ross", "Joe", "Monica"]

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i]);
// }

// for (let f of friends) {
//     console.log(f);
// }


// for ... in (works with Objects)

// let user = {
//     name: "John Doe",
//     age: 32,
//     email: "john@test.com"
// }

// for (let key in friends) {
//     console.log(`${key} : ${friends[key]}`);
// }


// window

// for (let key in window) {
//     console.log(key);
// }

// console.log(window);