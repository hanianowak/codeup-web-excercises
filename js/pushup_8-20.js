function multiply(a, b) {
    var multi = 0;
    for (var i = 0; i < b; i++)  {
        multi += a;
    }
    return multi;
}
console.log(multiply(4,5));

function exponentiate(x, y) {
    var multi = 1;
    for (var i = 0; i < y; i++)  {
        multi *= x;
    }
    return multi;
}
console.log(exponentiate(2,3));


// 8-21
function factorial(input) {
    var product1 = 1;
    for (var i = input; i > 0; i--) {
        product1 *= i;
    }
    return product1;
}

console.log(factorial(5));


function summation(x) {
     var product2 = 0;
     for (var i = x; i>0; i--){
         product2 += i;
     }
     return product2;
}
console.log(summation(5));
console.log(summation(2));
console.log(summation(10));
console.log(summation(4));


// 8-22
function capitalize (word) {
      var letters = word.split('');
      var newWord = letters.join;
      // for(var i; i = letters[0]; i++){
      //      newWord.push(letters[0].toUpperCase()) ;
      // }
      // console.log(newWord)   ;

}
 capitalize("hania") ;


function capitalizaFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

var word = "dOgGie";
console.log(capitalizaFirstLetter("dOg"));
console.log(capitalizaFirstLetter(word));




// 8-23
 var me = {
     name: "Daniel Fryar",
     hairColor: "brown",
     eyeColor: "brown",
     birthday: {
         month: 8,
         day: 29
     },
     juggle: function () {
         console.log("Hej, look at me I'm juggling");
     }
 };

 var wonderWoman = {
     name: "Wonder Woman",
     secretID: {
         name: "Diana Prince",
         occupation: "museum curator"
     },
     superPower: function(){
         console.log("she can fly")
     }
 };

 var superKid = {
     name: "Agata",
     power: function () {
         console.log("I can run for 20 hours");

     }
 };


 superKid.age = "8";
 superKid.additionalPowers = function () {
     console.log("fly!!!!!")
 };

 var students = [];
 students.push(me);
students.push(superKid);
 // students.push(cole);
 students[0].juggle();




 console.log(students);