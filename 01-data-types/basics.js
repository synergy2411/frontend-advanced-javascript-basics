// var x = 101;

// console.log(typeof (x));          // number

// x = "Some String";

// console.log(typeof (x));          // string

// x = true;

// console.log(typeof (x));          //boolean

// x = {}

// console.log(typeof (x));

// x = []

// console.log(typeof (x));

// x = function add(n1, n2) {
//     return n1 + n2;
// }

// console.log(typeof x)           // ?

// x = new Date("Oct 31, 2022")

// console.log(typeof x)           // ?





// var x = 101;

// var y = "99";

// console.log(x + y);     // ?
// console.log(x - y);     // ?




// var x = 101;
// var y = "99";
// var z = 5;

// var result = x - y * z;

// console.log(result);            //?


// Reference Type
// var objOne = {
//     name: "John"
// }

// var objTwo = objOne;

// objTwo.name = "Jenny";

// console.log(objOne.name);       // ?


// Primitive Type
// var x = 101;

// var y = x;

// y = "99";

// console.log(x)          // ?



var friends = ["Joe", "Chandler", "Monica"];

var moreFriends = friends;

moreFriends.push("Ross");

console.log(friends.length);            // ?
console.log(moreFriends.length);            // ?



var user = ["John", 32, true, function () { console.log("CALLED") }, {}, new Date("Oct 31, 2022")]

user[3]()
