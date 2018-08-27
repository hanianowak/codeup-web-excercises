"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

function isBoolean(input) {
    return typeof(input) == "boolean";
}

console.log(isBoolean(true));             // true
console.log(isBoolean(false));            // true
console.log(isBoolean(0));               // false
// isBoolean(null)             // false
// isBoolean("")               // false
// isBoolean("Bob")            // false
// isBoolean([1, 2])           // false

// 2. Define a function named `isNumeric` that takes in a value and returns true if the input is numeric or not. Numeric strings are numeric and should return true.
function isNumeric(input) {
    return !isNaN(input);
}

console.log(isNumeric(23));               // true
console.log(isNumeric("42"));             // true
// isNumeric(3.141)            // true
// isNumeric("")               // false
// isNumeric(true)             // false
// isNumeric("Bob")            // false
// isNumeric([1,2,3])          // false


// 3. Define a function named `isString` that takes in a value as an input and returns a boolean if the input provided is a string or not. Numeric strings will count as strings and should return true.
function isString(input) {
    return typeof(input) == "string";
}

console.log(isString("Hello"));           // true
console.log(isString("Codeup"));          // true
console.log(isString("123"));            // true
console.log(isString(4));                // false
// isString(true)              // false
// isString([1, 2, 3])         // false
// isString()                  // false
// isString(null)              // false


// 4. Define a function named `isArray` that takes in an input and returns a boolean whether or not that input is an array or not.

function isArray(input) {
    // return typeof(input) == "array";
    return input.constructor === Array;
}

console.log(isArray([]));                 // true
console.log(isArray([1, 2, 3]));          // true
// isArray(['a', 'b'])         // true
console.log(isArray(false));              // false
// isArray(12)                 // false
// isArray("Bob")              // false
// isArray({'some': 'object'}) // false
// isArray(true)               // false
// isArray()                   // false
//
// 5. Define a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is less than zero.
function isNegative(input) {
    return input < 0;
}

console.log(isNegative(-1));              // true
// isNegative(-5)              // true
console.log(isNegative("-3"));            // true
// isNegative(0)               // false
console.log(isNegative(6));               // false
// isNegative("10")            // false
// isNegative(true)            // false
// isNegative(false)           // false
// isNegative("Bob")           // false
// isNegative([-1, 2, 3])      // false
// isNegative(null)            // false
//
// 6. Define a function named `isPositive` that accepts an input and returns `true` or `false` based on whether the input is above zero. Any non-numeric input should return false.
function isPositive(input) {
    if (typeof(input) == "number") {
        return input > 0
    }
    else {
        return false;
    }
}
console.log(isPositive(1));               // true
console.log(isPositive("6"));             // true
// isPositive(3.141)           // true
// isPositive(-1)              // false
// isPositive(-5)              // false
// isPositive("-4")            // false
// isPositive(0)               // false
console.log(isPositive("Bob"));           // false
// isPositive(true)            // false
//
// 7. Define a function named `increment` that takes in an input and adds 1 to it if the input is numeric. If the input is not numeric, then return false.
function increment(input) {
    if (typeof(input) == "number") {
        input = parseFloat(input);
        return input + 1;
    }
    else {
        return false;
    }

}
console.log(increment(0));                // 1
console.log(increment("10"));             // 11
// increment(-5)               // -4
console.log(increment("Bob"));            // false
// increment([1, 2, 3])        // false
// increment(true)             // false
// increment(null)             // false
//
// 8. Define a function named `decrement`. If the provided input is numeric, the function should subtract 1 and return the result. If the input is not numeric, `decrement` should return false.
function decrement(input) {
    if (typeof(input) == "number") {
        input = parseFloat(input);
        return (input - 1);
    }
    else {
        return false;
    }


}
console.log(decrement(19));               // 18
// decrement(0)                // -1
console.log(decrement("4"));              // 3
console.log(decrement("Bob"));            // false
console.log(decrement([1, 2, 3]));        // false
// decrement(false)            // false
// decrement(null)             // false
//
// 9. Define a function named `square`. If the provided input is numeric, `square` should return the number multiplied by itself. If the input is not numeric, `square`, should return false.
function square(input) {
    if (typeof(input) == 'number')  {
        input = parseFloat(input);
        return (input * input);
    }
    else {
        return false;
    }
}

console.log(square(2));                   // 4
// square(3)                   // 9
// square(-4)                  // 16
console.log(square("5"));                 // 25
// square(0.5)                 // .25
console.log(square("Bob"));               // false
// square(true)                // false
// square(false)               // false
// square(null)                // false
// square([1, 2, 3])           // false
// square()                    // false
//
// 10. Define a function named `upperCase` that takes in a single input. If the input is not a string, return `false`. If the input is a non-numeric string, then return it with all the letters capitalized.
function upperCase(input) {
    if (typeof(input) != "string") {
        return false;
    }
    else {
        return input.toUpperCase();
    }
}
console.log(upperCase("Codeup"));         // "CODEUP"
console.log(upperCase("javascript"));     // "JAVASCRIPT"
// uppercase("45")             // false
// upperCase(23)               // false
// upperCase(null)             // false
// upperCase([1, 2, 3])        // false
console.log(upperCase(true));             // false
// upperCase()                 // false
//
//
// 11. Write a function named `isPalindrome` that takes in a single input. If the input is a numeric string, then return `false`. If the input is a string, then return true if the string is the same forwards as it is backwards. Return false if the string is different forwards from backwards. Ignore capitalization.
function isPalindrome(input) {
    return input == input.split('').reverse().join('');
}
// isPalindrome("Bob")         // true
// isPalindrome("radar")       // true
// isPalindrome("ufotofu")     // true
// isPalindrome("Monday")      // false
// isPalindrome(232)           // false
// isPalindrome(null)          // false
//
//
// 12. Write a function named `getHighestNumber` that takes in 3 arguments. If all 3 inputs are numbers or numeric strings, then return the highest number. If any of the 3 inputs is missing or non-numeric, then return `false`.
function getHighestNumber(a, b, c) {
    if (typeof(a) == "number" && typeof(b) == "number" && typeof(c) == "number") {
        var maximum = Math.max(a, b, c);
        return maximum;
    }
    else {
        return false;
    }
}
// getHighestNumber(1, 3, 2)           // 3
// getHighestNumber(0, 1, "2")         // 2
// getHighestNumber(9, 3, -20)         // 9
// getHighestNumber(2, 2, 2)           // 2
// getHighestNumber(2, 5, 5)           // 5
// getHighestNumber(1, 2, 'x')         // false
// getHighestNumber("a", "b")          // false
// getHighestNumber()                  // false
//
//
// 13. Write a function named `containsVowel` that takes in a single input as its argument. If the argument is not a string, then return `false`. If the argument is a string, then return true if the string contains any of the vowels 'a', 'e', 'i', 'o', or 'u' either uppercased or lowercased. Ignore 'y'. If the string does not contain any of these vowels, then return `false`.
function containsVowel(input) {
    if (typeof(input) == "string") {
        return (input.includes("a") || input.includes("e") || input.includes("i") || input.includes("o") || input.includes("u"));
    }
    else {
        return false;
    }
}
// containsVowel("Index")      // true
// containsVowel("Codeup")     // true
// containsVowel("Jane")       // true
// containsVowel("bb8")        // false
// containsVowel("")           // false
// containsVowel(34)           // false
// containsVowel([1, 2, 3])    // false
//
// 14. Write a function named `add` that takes in two inputs. If both inputs provided are numeric, `add` will return the sum of both inputs. If one or both inputs is not numeric, `add` should return false.
function add(input1, input2) {
    if (typeof(input1) == "number" && typeof(input2) == "number") {
        input1 = parseFloat(input1);
        input2 = parseFloat(input2);
        return input1 + input2;
    }
    else {
        return false;
    }
}
// add(1, 2)                   // 3
// add(0, 0)                   // 0
// add(-5, 10)                 // 5
// add("2", 4)                 // 6
// add(5, true)                // false
// add(true, false)            // false
// add("Monday", "Tuesday")    // false
// add(null)                   // false
//
//
// 15. Write a function named `multiply` that takes in two inputs. If both inputs provided are numeric, `multiply` returns the product of the first input multiplied by the second. If either or both inputs are not numeric, `multiply` should return false.
function multiply(input1, input2) {
    if (typeof(input1) == "number" && typeof(input2) == "number") {
        input1 = parseFloat(input1);
        input2 = parseFloat(input2);
        return input1 * input2;
    }
    else {
        return false;
    }
}
// multiply(4, 2)              // 8
// multiply(0, 44)             // 0
// multiply(-5, 10)            // -50
// multiply(5, true)           // false
// multiply(true, false)       // false
// multiply("Monday")          // false
//
// 16. Write a function named `sumOfSquares` that takes in two inputs. If both inputs are numeric, `sumOfSquares` should square each input and return the sum of them added together. For example, if we pass `a` and `b` then we should square `a` and add it to the square of `b`. If either or both inputs are not numeric, `sumOfSquares` should return false.
function sumOfSquares(input1, input2) {
    if (typeof(input1) == "number" && typeof(input2) == "number") {
        input1 = parseFloat(input1);
        input2 = parseFloat(input2);
        return input1 * input1 + input2 * input2;
    }
    else {
        return false;
    }
}
// sumOfSquares(2, 3)          // 13
// sumOfSquares(1, 0)          // 1
// sumOfSquares("4", 5)        // 41
// sumOfSquares(2, false)      // false
// sumOfSquares(null)          // false
// sumOfSquares()              // false






//training

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Pushup</title>
//     </head>
//     <body>
//     <!--<h1 id="main-heading">Hello World!</h1>-->
// <!--<div id="main-section">-->
// <!--<p>Paragraph 1</p>-->
// <!--<p>Paragraph 2</p>-->
// <!--</div>-->
// <script>
//     // "use strict";
// //     (function() {
// //         // Get the main heading h1 by id
// //         var mainHeading = document.getElementById('main-heading');
// //
// //         console.log(mainHeading.innerHTML); // Prints Hello World!
// //
// //         // Assign a new value to the inner HTML of the main heading
// //         mainHeading.innerHTML = "Hello Codeup!";
// //
// //         console.log(mainHeading.innerHTML); // Prints Hello Codeup!
// //
// //         // Get the main section div by id
// //         var mainSection = document.getElementById('main-section');
// //
// //         console.log(mainSection.innerHTML);
// //         // Prints
// //         // <p>Paragraph 1</p>
// //         // <p>Paragraph 2</p>
// //     })();
// //     var summation = function(num) {
// //         var product = 0;
// //         for (var i = num; i > 0; i--){
// //             console.log(product, i);
// //              product += i;
// //         }
// //         return product;
// //     };
// //
// // console.log(summation(5));
// //     console.log(summation(10));
// //     console.log(summation(15));
// //     console.log(summation(20));
//
// // function capitilize(str) {
// //         return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
// // }
// // console.log(capitilize("dOg"));
// // console.log(capitilize("HackerRank"));
// // console.log(capitilize("Daniel Fryar"));
// // var students =["A,B,M,K,P,T"];
// var students =["A","B","M","K","P","T"];
// var people = ["b", "a"]
// function addStudents(arr, a) {
//
//     arr.push(a);
// }
// console.log(addStudents(people,"jj"));
// console.log(addStudents(students, "br"));
//
// console.log(students);
// console.log(people);
//
// // var sandwich = {meat:"turkey"};
//
// var pizza ={
//     crust:'thin',
//     toppings:3,
//     hasBacon:true,
//     howmanyToppings:function(){
//         return this.toppings;
//     },
//     sauces:["bbq","ranch","orignial"],
// };
//
// function selectSauces(something){
//     for(var i = 0; i< something.sauces.length;i++){
//         console.log(something.sauces[i])}
// }
// console.log(selectSauces(nasty));
//
// selectSauces(pizza);
// console.log( pizza)
// pizza["newObject"] = "goodSauce";
// console.log("+++++++++++++++++++");
// console.log(pizza);
// pizza.sauces.push;
// pizza;
// console.log(pizza.sauces[0]);
//
// var students = []
// var me = {
//     name: "Hunter Houts",
//     hairColor: "black",
//     eyeColor: "brown",
//     Birthday: {
//         month: 09,
//         day: 19,
//     },
//     laugh: function() {
//         let laugh = "ha"
//         return laugh.repeat(6);
//     }
// };
// var student1 = {
//     name:"John Doe",
//     hairColor: "blonde",
//     eyeColor: "blue",
//     Birthday: {
//         month: 01,
//         day: 01,
//     },
// };
// var student2 = {
//     name: "Jane Doe",
//     hairColor: "red",
//     eyeColor: "green",
//     Birthday: {
//         month:02,
//         day: 02,
//     },
// };
// var student3 = {
//     name: "Brittany Houts",
//     hairColor: "red",
//     eyeColor: "green",
//     Birthday: {
//         month: 01,
//         day: 15,
//     },
// };
// var students = []
// students.push(me);
// students.push(student1);
// students.push(student2);
// students.push(student3);
// console.log(students);
// console.log(students[0].laugh());
//
// var us = ["h", "a", "j"];
// var them = ["y", "r"];
//     function takeone() {
//      them.shift();
//
//     }
//     function takeone2(a) {
//         us.shift(a);
//     }
//
//
//
//     console.log(takeone());
//     console.log(takeone2("brittany"));
//
//     console.log(us);
//     console.log(them);

// var names = ['britt', 'kev', 'jj'];
// names.forEach(function(element) {
//     if (element !== 'kev') {
//         console.log(element);
//     }
// });



/// git

// Git Practice Exercise
//
// What this exercises:
//
//     Cloning repositories
// Creating your own branch
// Adding and committing files to your own branch
// Pushing your branch to a remote repository
// Why is this important
//
// Git proficiency is crucial for working with source code in a collaborative way
// Employer partners often share with Codeup that they'd graduates
// The topics of this exercise will be assessed later in the Codeup course
// Directions
//
// Clone this repository to your development environment
// Create a branch named your firstname-lastname. For instance, Grace Hopper would create a branch called grace-hopper
// Go to index.html and add an <h1> element that contains your name.
//     Add and commit your changes.
//     Push your local firstname-lastname branch to GitHub.
//     Detailed Instructions
//
// Clone this repository to your local projects directory. If you're using IntelliJ, go to File->New->Project From Version Control->GitHub and then paste the clone address of this repo. The clone address of the repo is found by clicking the green "Clone or download" button on the repo's page.
//
//     Create a branch named firstName-lastLastname where firstName is your first name and lastName is your last name. In IntelliJ, go to VCS, then Git, then Branches, and click "+ New Branch" and name it accordingly.
//
//     Either do Command+K or go to VCS, Git, then commit your work in IntelliJ.
//
//     Push your branch to GitHub with Command+Shift+K or go to VCS, Git, then Push. This will push your firstname-lastname branch to this GitHub repository.
//
//     Setup requirements
//
// Instructors must add students to a team named after the class name.
// Students must accept the invite from GitHub in order to be able to contribute to this repo