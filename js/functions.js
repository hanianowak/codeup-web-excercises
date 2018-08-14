"use strict";

// function addSeven(number) {
//     return parseFloat(number) + 7;
// }
//
// var number = 3;
// console.log("Our number plus 7 is " + addSeven(number));
//
// /**
//  * TODO:
//  * Create a function called 'sayHello' that takes a parameter 'name'.
//  * When called, the function should return a message that says hello to the passed in name.
//  *
//  * Example
//  * > sayHello("codeup") // returns "Hello, codeup!"
//  */
//
// function sayHello(name) {
//     return "Hello " + name;
//
// }
// var name = "Damian";
// console.log(sayHello(name));
//
//
// /**
//  * TODO:
//  * Call the function 'sayHello' and pass your name as a string literal argument.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  *
//  * console.log 'helloMessage' to check your work
//  */
//
//
// var helloMessage = sayHello("Hania");
// console.log(helloMessage);
//
//
//
//
// /**
//  * TODO:
//  * Store your name as a string in a variable named 'myName', and pass that
//  * variable to the 'sayHello' function. You should see the same output in the
//  * console.
//  */
//
// var myName = "Hania";
// console.log(sayHello(myName));
//
// // Don't modify the following line, it generates a random number between 1 and 3
// // and stores it in a variable named random
// var random = Math.floor((Math.random() * 3) + 1);
//
// /**
//  * TODO:
//  * Create a function called 'isTwo' that takes a number as a parameter.
//  * The function should return a boolean value based on whether or not the passed
//  * number is the number 2.
//  *
//  * Example
//  * > isTwo(1) // returns false
//  * > isTwo(2) // returns true
//  * > isTwo(3) // returns false
//  *
//  * Call the function 'isTwo' passing the variable 'random' as a argument.
//  *
//  * console.log *outside of the function* to check your work (you should see a
//  * different result everytime you refresh the page if you are using the random
//  * number)
//  */
//
// function isTwo (number) {
//     return number === 2;
//     // var is2 = (number == 2);
// }
//
// var number = 4;
// console.log("Your number is 2: " + isTwo(number));
// console.log("Our random number is: " + random);
// console.log("Our random number is 2: " + isTwo(random));
//
//
// /**
//  * TODO:
//  * Create a function named 'calculateTip' to calculate a tip on a bill at a
//  * restaurant. The function should accept a tip percentage and the total of the
//  * bill, and return the amount to tip
//  *
//  * Examples:
//  * > calculateTip(0.20, 20) // returns 4
//  * > calculateTip(0.25, 25.50) // returns 6.37
//  * > calculateTip(0.15, 33.42) // returns 5.013
//  */
//
// function calculateTip(percentage, total) {
//     //var tip = percentage*total;
//     //return tip.toFixed(2);
//     return percentage * total;
// }
//
// console.log("your tip is: " + calculateTip(0.20,20));
//
// /**
//  * TODO:
//  * Use prompt and alert in combination with your calculateTip function to
//  * prompt the user for the bill total and a percentage they would like to tip,
//  * then display the dollar amount they should tip
//  */
//
// var percentage = parseFloat(prompt("How many percent you want to give as a tip?"));
// var total = parseFloat(prompt("How much is your total?"));
// alert("The tip is $" + calculateTip(percentage, total).toFixed(2));
//
//
// /**
//  * TODO:
//  * Create a function named `applyDiscount`. This function should accept a price
//  * (before a discount is applied), and a discount percentage (a number between 0
//  * and 1). It should return the result of applying the discount to the original
//  * price.
//  *
//  * Example:
//  * > var originalPrice = 100;
//  * > var dicountPercent = .2; // 20%
//  * > applyDiscount(originalPrice, dicountPercent) // 80
//  *
//  * > applyDiscount(45.99, 0.12) // 40.4712
//  */
//
// function applyDiscount(price, percent) {
// return price - (price * percent);
// }
//
// var price = 100;
// var percent = .2;
//
// console.log("your total is: " + applyDiscount(price, percent));




//loops - first example
var hitMe = function () {
    return Math.floor((Math.random() *11)+1)
}

var count = 0;
if (confirm("do you want to play a game?")) {
    while (count <= 21) {
        if (confirm("your score is " + count + ". Do you want another card?")) {
            count += hitMe();
        } else break;
    }
    if (count > 21) {
        alert("You busted!")
    }
    else {
        alert ("your score is " + count);
    }
}



// if (confirm("do you want to play a game?")) {
//     var magicNumber = Math.floor((Math.random() *100)+1);
//     var ourGuess;
//
//     while (ourGuess !== magicNumber) {
//         ourGuess = parseInt(prompt("guess a number between 1 and 100"))
//         if (ourGuess < magicNumber) {
//             alert("too low");
//         } else {
//             alert("too high");
//         }
//     }
//     alert("Congratulations! you guessed!")
// }

if (confirm("do you want to play a game?")) {
    var magicNumber = Math.floor((Math.random() *100)+1);
    var ourGuess;

    do {
        ourGuess = parseInt(prompt("guess a number between 1 and 100"))
        if (typeof ourGuess != "number") continue; //skips the rest of the loop
        if (ourGuess < magicNumber) {
            alert("too low");
        } else if (ourGuess > magicNumber) {
            alert("too high");
        }
    } while (ourGuess !== magicNumber)
    alert("Congratulations! you guessed!")
}


var count = 0;
while (count < 10) {
    console.log(count);
    count++;
}


for (var count = 0; count < 10; count++) {
    console.log(count);
}