// # Functions with conditionals but no loops or arrays
// Make a function named isOdd(number)
function isOdd(number) {
    return number % 2 === 1;
}

// Make a function named isEven(number)
function isEven(number) {
    return number % 2 === 0;
}

// Make a function named identity(input) that returns the input exactly as provided.
function identity(input) {
    return input;
}

//     Make a function named isFive(input)
function isFive(input) {
    return input === 5;
}

// Make a function named addFive(input) that adds five to some input.
function addFive(input) {
    return input + 5;
}

// Make a function named isMultipleOfFive(input)
function isMultipleOfFive(input) {
    return input % 5 === 0;
}

// Make a function named isThree(input)
function isThree(input) {
    return input === 3;

}

// Make a function named isMultipleOfThree(input)
function isMultipleOfThree(input) {
    return input % 3 === 0;
}

// Make a function named isMultipleOfThreeAndFive(input)
function isMultipleOfThreeAndFive(input) {
    return (input % 3) && (input % 5) === 0;
}

// Make a function named isMultipleOf(target, n) which checks if target is evenly divisible by n
function isMultipleOf(target, n) {
    return target % n === 0;
}

// Make a function named isTrue(boolean)
function isTrue(boolean) {
    return boolean === true;
}

// Make a function named isFalse(boolean)
function isFalse(boolean) {
    return boolean === false;
}

// Make a function named isTruthy(input) // remember that values other than true will behave like true
// Make a function named isFalsy(input) // remember that values other than false behave like false

function isTruthy(boolean) {
    return boolean == true;
}

// Make a function named isFalse(boolean)
function isFalsy(boolean) {
    return !boolean;
}

// Make a function named isVowel(letter)
function isVowel(letter) {
    return letter === ("a" || "e" || "i" || "o" || "u");  // y?


}

console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('c'));


// Make a function named isConsonant(letter)
function isConsonant(letter) {
    return letter !== ("a" || "e" || "i" || "o" || "u");
}



// Make a function named isCapital(letter)
function isCapital(letter) {
    return letter === letter.toUpperCase();
}


// Make a function named isLowerCase(letter)
function isLowerCase(letter) {
    return letter === letter.toLowerCase();
}


// Make a function named hasLowerCase(string) that returns if a string has any lower cased




// Make a function named isSpace(letter) that returns if a character is a space character



// Make a function named isZero(number)
function isZero (number) {
    return number === 0;
}

// Make a function named notZero(input) that returns true if..
// Write a function named lowerCase(string)

// Write a function named double(n) that returns a number times two
function double(n) {
    return n * 2;
}

// Write a function named triple(n) that returns a number times 3
function triple(n) {
    return n * 3;
}

// Write a function named quadruple(n) that returns a number times 4
function quadruple(n) {
    return n * 4;
}


// Write a function named half(n) that returns 1/2 of the provided input
function half(n) {
    return n / 2;
}


// Write a function named subtract(a, b) that returns a minus b
function substact(a,b) {
    return a - b;
}


// Write a function named multiply(a, b) that returns the product of a times b
function multiply(a, b) {
    return a * b;
}


// Write a function named divide(a, b) that returns a divided by b
function divide(a, b) {
    return a/b;
}


// Write a function named remainder(a, b) that returns the remainder after dividing a by b
// Make a function named modulo(a, b) that returns the returns the remainder after dividing a by b




// Write a function named cube(n) that returns n * n * n
function cube(n) {
    return n * n * n;
}



// Write a function named squareRoot(n) that returns the square root of the input
// Write a function named cubeRoot(n) that returns the cube root of the input
// Write a function named invertSign(number) that returns a negative version of a postive number, a positve version of negative, and false for all else.
// Write a function named degreesToRadians(number)
// Write a function named radiansToDegrees(number)
// Make a function named isBlank(input) that determines if a given input is spaces, newline characters, or tabs.
// Make a function named trim(string) that removes empty spaces before and after the input.




// Make a function named areEqual(input1, input2) that returns if both inputs have the same value
function areEqual(input1, input2) {
    return input1 == input2;
}


// Make a function named areIdentical(input1, input2) that returns if both inputs are same value and data type.
function areIdentical(input1, input2) {
    return input1 === input2;
}


// Make a function named not(input) returns the input with a flipped boolean
function not(input) {
    return !input;
}


// Make a function named notNot(input) that the negation of the negation of the input.
function notNot(input) {
    return !!input;
}



// Make a function named and(predicate1, predicate2) that returns the logical operation of AND
function and(predicate1, predicate2) {
    return predicate1 && predicate2;
}



// Make a function named or(predicate1, predicate2) that returns the logical operation of OR
function or(predicate1, predicate2) {
    return predicate1 || predicate2;
}


// Write a function called reverseString(string) that reverses a string
// Make a function named absoluteValue(number) that returns the absolute value of a number.
// Make a function named rollDice(sides) that takes in an argument containing the number of sides the die should have. Generate a random number between 1 up to and including the number of sides.