// var message = "Hello, World!";
// alert(message);

"use strict";

// var age = 30;
// var message = "Happy birthday! You are " + ++age + " years old!";
// alert(message);

// var message = "Happy birthday! You are "
// message += age;
// message += " years old.";
// alert(message);

// var myAge = prompt("How old are you?");
// console.log(typeof myAge);

// console.log(prompt("How old are you?"));



// var message1 = "Happy birthday! You are ";
// message1 += ++myAge;
// message1 += " years old.";
// alert(message1);

// var input = confirm("are you having a good day?");
// console.log(typeof input);

//8888888888
// var myName = prompt("Whats your name?");
//
// function birthday(name) {
//     var message = "happy birthday, " + name;
//   com  message += ++myAge;
//   com  message += " years old.";
    // console.log(message);
// }
//
// birthday(myName);
//
// var myDog = prompt("What's your dog's name?");
// birthday(myDog);
// birthday("Hania");
// birthday();
// birthday();
//888888888888



var myName = prompt("Whats your name?");

var birthday = function (name) {
    var message = "happy birthday, " + name;
    console.log(message);
}

birthday(myName);

var myDog = prompt("What's your dog's name?");
birthday(myDog);
birthday("Hania");
birthday();

