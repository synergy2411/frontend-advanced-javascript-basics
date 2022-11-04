// let fruits = new Array("apple", "banana", "oranges");

// console.log(fruits);


// let numbers = [12, 34, 56, 78]

// // let nums = new Array(12);

// console.log(numbers[0]);

// let copyNumber = numbers;

// copyNumber[0] = 101;

// console.log(numbers)




// ARRAY METHODS

// let ratings = [4, 5, 3, 2, 3, 4, 5, 2, 5, 3];




// TO MUTATE ORIGINAL ARRAY

// ratings.push(101, 99, 201);

// ratings.unshift(99, 101);

// let deletedItem = ratings.pop()
// console.log(deletedItem);

// let item = ratings.shift()
// console.log(item);          // ?

// let items = ratings.splice(3, 3, 3, 3, 3)

// console.log(items);         // ?


// ratings.fill(99, 2, 4);

// let ref = ratings.reverse()
// console.log(ref);

// ratings.sort()

// console.log(ratings);           // ?


// let fruits = ["banana", "oranges", "apple", "kiwi", "grapes"]
// fruits.sort()
// console.log(fruits);

// let flags = [true, false, true, false, false]
// flags.sort()
// console.log(flags);

// let movies = [
//     { name: "rrr", director: "Rajamouli" },
//     { name: "bramastra", director: "Ayan Mukherji" },
//     { name: "ramleela", director: "Sanjay Leela Bansali" }
// ]
// movies.sort(function (a, b) {
//     console.log("----------------");
//     console.log(a, b);
//     if (a.director > b.director) {
//         return 1;
//     } else {
//         return -1
//     }
// })

// console.log(movies);


// ratings.sort(function (a, b) {
//     console.log(a, b)
//     if (a > b) {
//         return 1
//     } else {
//         return -1
//     }
// })

// console.log(ratings);



// let numbers = [3, 2, 1];

// numbers.sort(function (a, b) {
//     console.log(a, b);
//     if (a > b) {
//         return 1;
//     } else if (a < b) {
//         return -1
//     } else {
//         return 0
//     }
// })
// console.log(numbers);

// First time = [2,3,2]
// Second Time = [ 2, 2, 3]
// Third Time = []



// CREATE NEW ARRAY FROM OIGINAL ONE

// let ratings = [2, 3, 5, 3, 4, 2, 5];

// map
// let doubleRating = ratings.map(function (value, index, array) {
//     console.log(value, index, array);
//     return value * 2;
// })
// console.log(doubleRating);

// filter
// let newArray = ratings.filter(function (value) {
//     return value >= 4
// })
// console.log(newArray);          // [5,4,5]

// slice
// let portion = ratings.slice(2, 4)
// console.log(portion);

// concate
// let moreRatings = [3, 4, 5, 1]
// let newRatings = ratings.concat(moreRatings)
// console.log(newRatings);

// console.log(ratings);


// let movies = [
//     { name: "rrr", director: "Rajamouli", rating: 5, collection: 800, isMultistar: true },
//     { name: "bramastra", director: "Ayan Mukherji", rating: 3, collection: 200, isMultistar: true },
//     { name: "ramleela", director: "Sanjay Leela Bansali", rating: 4, collection: 500, isMultistar: false }
// ]

// let filteredMovies = movies.filter(function (m) {
//     return m.director.includes("Raja") || m.director.includes("Ayan")
// })

// let filteredMovies = movies.filter(function (m) {
//     return !m.isMultistar
// })

// let filteredMovie = movies.filter(function (movie) {
//     console.log(movie);
//     return movie.rating >= 4;
// })

// console.log(filteredMovies);




// ARRAY INDEX

let movies = [
    { name: "rrr", director: "Rajamouli", rating: 5, collection: 800, isMultistar: true },
    { name: "bramastra", director: "Ayan Mukherji", rating: 3, collection: 200, isMultistar: true },
    { name: "ramleela", director: "Sanjay Leela Bansali", rating: 4, collection: 500, isMultistar: false }
]

// let ratings = [2, 3, 5, 3, 4, 2, 5];

// indexOf
// console.log(ratings.indexOf(3))          // ?

// findIndex
// let position = ratings.findIndex(function (value) {
//     return value > 4
// })
// console.log(position);      // ?




// let position = movies.findIndex(function (m) {
//     return m.collection === 200
// })

// movies.splice(position, 1);

// console.log(movies)


// let position = movies.findIndex(function (m) {
//     return m.name === "ramleela"
// })

// movies[position].collection += 100;



// find

// let foundMovies = movies.filter(function (m) {
//     return m.isMultistar
// })

// foundMovies = foundMovies.map(function (m) {
//     m.collection += 100;
//     return m
// })

// foundMovies.forEach(function (m) {
//     m.collection += 200;
// })


// console.log(foundMovies);



// TO KNOW IF ARRAY INCLUDES

// let ratings = [2, 3, 5, 3, 4, 2, 5, 1];

// some
// let flag = ratings.some(function (r) {
//     return r > 1
// })

// console.log(flag);

// every
// let flag = ratings.every(function (r) {
//     return r > 1
// })
// console.log(flag);

// join

// let joinedRating = ratings.join("-")

// console.log(joinedRating);


// reduce

// let ras

// let result = ratings.reduce(function (prevValue, currValue) {
//     return prevValue -= currValue;
// }, 100)

// console.log(result);