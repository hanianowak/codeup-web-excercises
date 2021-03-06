"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

var enter = confirm("would you like to enter a number?");

if (enter === true) {
    var num = prompt("type a number");

    if (isNaN(num) === true) {
        alert("It's not a number!");
    }

    else {
        if (parseFloat(num) % 2 === 0) {
            alert("your number is even!");
        }
        else {
            alert("your number is odd!");
        }


        var plus100 = parseFloat(num) + 100;
        alert("Your number plus 100 is " + plus100);

        var positive = parseFloat(num) > 0;

        if (positive === true) {
            alert("your number is positive!");
        }
        else {
            alert("your number is negative!");
        }
    }
}

else {
    alert("that's ok!");
}


/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analizeColor(color) {

    if (color === "blue") {
        console.log("the sky is blue");
    }
    else if (color === "red") {
        console.log("fire is red");
    }
    else if (color === "pink") {
        console.log("lollipops are pink");
    }
    else {
        console.log("I don't know anything about this color");
    }
}

console.log(analizeColor("blue"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
console.log(analizeColor(randomColor));

//
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
//


function analizeColor2(color2) {
    switch (color2) {
        case "blue":
            console.log("the sky is blue");
            break;

        case "red":
            console.log("fire is red");
            break;

        case "pink":
            console.log("lollipops are pink");
            break;

        default:
            console.log("I don't know anything about this color");
    }
}


console.log(analizeColor2("pink"));


/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

function analizeColor3(color3) {
    switch (color3) {
        case "blue":
            alert("the sky is blue");
            break;

        case "red":
            alert("fire is red");
            break;

        case "pink":
            alert("lollipops are pink");
            break;

        default:
            alert("I don't know anything about this color");
    }
}


var yourColor = prompt("What's your favorite color?"); // doesn't work - undefined in alert, okay in console
analizeColor3(yourColor);


/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(luckyNumber, total) {


    if (luckyNumber === 0) {
        return total;
    }
    else if (luckyNumber === 1) {
        return (total - (total * 0.1));
    }
    else if (luckyNumber === 2) {
        return (total - (total * 0.25));
    }
    else if (luckyNumber === 3) {
        return (total - (total * 0.35));
    }
    else if (luckyNumber === 4) {
        return (total - (total * 0.5));
    }
    else {
        return (total - total);
    }
}

console.log("yur total is: $" + calculateTotal(2, 100));


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

var yourBill = prompt("What's your total?");
alert("Your lucky number is: " + luckyNumber);
alert("Your price before discount is: " + yourBill);
alert("your total after discount is: " + calculateTotal(luckyNumber, yourBill));

