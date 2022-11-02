// Literal Method

// let myBooks = ["book1", "book2", "book3"];

// let box = {
//     width: 10,
//     "height": 8,
//     "# of books": 10,
//     books: myBooks,
//     addBook: function (newBook) {
//         this.books.push(newBook);
//     }
// }

// box.volume = box.width * box["height"];

// // console.log(box.books.length);          // ?

// box.addBook("book4");

// console.log(box.books.length);          // ?
// console.log(myBooks.length);            // ?

// console.log(box["# of books"]);
// console.log(box["#_of_books"]);
// console.log(box);




// Constructor Method - Similar types of Object

// function Student(studId, studName) {
//     // let this = {}
//     this.studId = studId;
//     this.studName = studName;
//     this.getDetails = function () {
//         return this.studId + " : " + this.studName;
//     }
//     // return this;
// }


// let john = new Student("S001", "John Doe");
// let jenny = new Student("S002", "Jenny Doe");

// console.log(john.getDetails());
// console.log(jenny.getDetails());



// Instance Method - Object inheritance / prototypical inheritance

let shoe = {
    size: 9
}

let magicShoe = Object.create(shoe);


console.log(shoe.isPrototypeOf(magicShoe))
console.log(magicShoe.isPrototypeOf(shoe))

console.log(Object.prototype.isPrototypeOf(shoe))
console.log(Object.prototype.isPrototypeOf(magicShoe))


















// console.log("Size : ", magicShoe.size);

// magicShoe.size = 12;

// console.log(magicShoe);             //  { size : 12 }
// console.log(shoe);                  // { size : 9 }

// console.log(magicShoe);

// console.log(magicShoe.hasOwnProperty("size"))            // ?
// console.log(shoe.hasOwnProperty("size"))            // ?


// let str = "Some String";
// // let str = new String("Some String");

// console.log(str.length);            // ?

// console.log(str.indexOf("e"))

// console.log(str.constructor)

// console.log(magicShoe)