let dogs = [
    {
        name: "Bob",
        age: 3,
        breed: "labradoodle",
        sex: "female"
    } ,
    {
        name: "Dodo",
        age: 2,
        breed: "Cocker Spaniel",
        sex: "female"
    },
    {
        name: "Wowo",
        age: 4,
        breed: "labradoodle",
        sex: "male"
    },
    {
        name: "Gaga",
        age: 2,
        breed: "Cocker Spaniel",
        sex: "female"
    }
];


const names = dogs.map(dog => dog.name);
console.log(names);


const years = dogs.reduce((sumsum, dog) => {
      return sumsum + dog.age;
}, 0);
console.log(years);
console.log(years/(dogs.length));


const oldest = dogs.filter(dog => dog.age>=3);
console.log(oldest);


//pushups 9/11


// dogs.forEach(function (dog) {
//      console.log(dog.name);
// });
//
// dogs.forEach(function (dog) {
//     var sumsum = 0;
//     sumsum += dog.age;
// }
// console.log(sumsum/dogs.length););












// array1.forEach(function(element) {
//     console.log(element);
// });