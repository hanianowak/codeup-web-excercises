// Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num * i);
    }
}

console.log(showMultiplicationTable(7));




// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even.


for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor((Math.random() *180)+20);
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
            console.log(randomNumber + " is odd");
        }
}



// Create a while loop that uses console.log() to create the output shown below.
var count = 2;
var end = 65536;
while (count <= end) {
    console.log(count);
    count = count * 2;
}




// An ice cream seller can't go home until she sells all of her cones. Write a JS program that generates a random number between 50 and 100 representing the amount of cones to sell. Your code should generate numbers between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person.

// // This is how you get a random number between 50 and 100
// var allCones = Math.floor(Math.random() * 50) + 50;
// // This expression will generate a random number between 1 and 5
//
//
// do {
//     var clientsCones = Math.floor(Math.random() * 5) + 1;
//     console.log(clientsCones + " sold");
//     i++;
// } while (i < allCones);

var allCones = Math.floor(Math.random() * 50) + 50;
var conesOrdered;

do {
    conesOrdered = Math.floor(Math.random() * 5) + 1;
    console.log("the next customer ordered " + conesOrdered + " numbers of cones");

    if(conesOrdered <= allCones) {
        console.log("sold " + conesOrdered + " numbers of cones");
        allCones = allCones - conesOrdered;
        console.log("i have now " + allCones + " left in my inventory")
    } else {
        console.log("sorry, i dont have enough cones");
    }

    if(allCones > 0) {
        console.log("next customer, please!");
    }

} while (allCones > 0);
console.log("i sold all the cones!");



// Create a for loop that uses console.log to create the output shown below.
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999
var output;
for (var a=1; a<=9; a++) {
    output = "";
    for(var j = 1; j <= i; j++) {
        output += i;
    }
    cosole.log(output);
}


// Create a for loop that uses console.log to create the output shown below.
//
// 100
// 95
// 90
// 85
// 80
// 75
// 70
// 65
// 60
// 55
// 50
// 45
// 40
// 35
// 30
// 25
// 20
// 15
// 10
// 5


var num = 105;

for (i=1; i<=20; i++) {
    console.log(num -= 5);
}


//break and continue
//Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
// for (i=1; i<6; i++) {
//     var randomOdd = prompt("give me a random odd numer between 1 and 50");
//
//     if (randomOdd % 2 !== 0) {
//         console.log("its not an odd number!");
//         break;
//     }
// }


do {
    var randomOdd = prompt("give me a random odd number between 1 and 50");
} while (parseFloat(randomOdd) % 2 === 0);



// Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered

var randomOdd2 = prompt("give me a random odd number between 1 and 50");
for (var num3 = 1; num3 < 50; num3++) {

    if (num3 == parseFloat(randomOdd2)) {
        continue;
    }
    else if (num3 % 2 != 0) {
        console.log(num3);
    }
    else {

    }
}