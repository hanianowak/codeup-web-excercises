// Loop and Array challenges
//


// Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

function randomIntBetween(min, max) {
    return Math.floor(Math.random() * (max-min)) + min;
}
console.log("your random number is: " + (randomIntBetween(30, 70)));



// Make a function called coinFlip() that returns either 0 or 1, randomly

function coinFlip() {
    return Math.floor(Math.random() * 2);
}
console.log(coinFlip());



// Make a function called rollDie() that returns an integer between 1 and 6.

function rollDie() {
    return Math.floor(Math.random() * (5)) + 1;
}
console.log(rollDie());



// Make a function called twoDice() that returns the sum of rolling two six sided dice.
function twoDice() {
    var first = Math.floor(Math.random() * (5)) + 1;
    var second = Math.floor(Math.random() * (5)) + 1;
    return first + second;
}
console.log("sum: " + twoDice());

// Make a function called twentySidedDie() that returns a random integer between 1 and 20.



// Make a function called twelveSidedDie() that returns a random integer between 1 and 12.



// Make a function called tetrahedron() that returns a random integer between 1 and 4.


//



// Use what you know about functions, loops, and arrays to complete the following:
//
//     Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.
//

//
// Make a function called
// listOfRollsFromDieFunc(numberOfRoles, diceFunction) that takes in two arguments:
//     The first argument is the number of rolls you want to make.
//     The second argument is a function that contains the function definition for the type of die you want to roll.
//     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.




// Make an array containing 20 random numbers between 1 and 6.
//
//
// Make a forEach that only outputs the even numbers
//
// Make a forEach that adds 10 to each number
//
// Make a forEach that gets the average of all the numbers











// Challenge #1:
//
// Define a function named allIndexesOf that takes in two arguments. The first argument should be the array to search and the second argument should be the value you want to search for. If the item does not exist in the provided array, return an empty array;
//
// Given:
var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
// allIndexesOf(fruits, "apple") should return the array [0, 3]
// allIndexesOf(fruits, "guava") should return the array []
// allIndexesOf(fruits, "pineapple") should return [4]
//
//
// var allIndexesOf = function (fruits, searchFruit) {
//     var indexes = [], i = -1;
//     while ((i = fruits.indexOf(searchFruit, i+1)) != -1){
//         indexes.push(i);
//     }
//   return indexes;
// }
// console.log(allIndexesOf(fruits, "apple"));
// console.log(allIndexesOf(fruits, "guava"));
// console.log(allIndexesOf(fruits, "pineapple"));

function allIndexesOf(array, value) {
    var indexes = [];
    for(var i = 0; i < array.length; i++) {
        if (array[i] === value)
            indexes.push(i);
    }
    return indexes;
}

console.log(allIndexesOf(fruits, "apple"));
console.log(allIndexesOf(fruits, "guava"));
console.log(allIndexesOf(fruits, "pineapple"));
console.log(allIndexesOf(bugs, "ant"));



// Challenge #2
// Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to
//
// Given:
//     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
//
// removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
//
// removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
//
// removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.

function removeAll(array, value) {
    var reduced = [];
    for(var i = 0; i < array.length; i++) {
        if (array[i] !== value)
            reduced.push(array[i]);
    }
    return reduced;
}
console.log(removeAll(bugs, "ant"));
console.log(removeAll(bugs, "mosquito"));
console.log(removeAll(bugs, "roach"));




//Challenge #0
//define a function named countOccurrances(array, item) that takes in two arguments. 1 - the array you want to search, 2 - the value you wish to count. if there no occurrances - return 0.

var fruits2 = ["apple", "banana", "orange", "apple", "pineapple"];
var bugs2 = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

//first try
// function countAllOccurrances(array, item) {
//     var indexes = [];
//     for(var i = 0; i < array.length; i++) {
//         if (array[i] === item)
//             indexes.push(i);
//     }
//     return indexes.length;
// }

function countAllOccurrances(array, value) {
    var count = 0;
    array.forEach(function(element) {
        if(element === value) {
            count++;
        }
    });
    return count;
}


console.log(countAllOccurrances(bugs2, "ant")); //should return 3
console.log(countAllOccurrances(fruits2, "apple")); //should return 2
console.log(countAllOccurrances(bugs2, "mosquito")); //should return 2
