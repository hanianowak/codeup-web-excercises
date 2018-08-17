(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Hania",
        lastName: "Nowak"
    };
    console.log(person.firstName);
    console.log(person.lastName);



    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function () {
        console.log("Hello from " + person.firstName + " " + person.lastName + "!");
    };
    console.log(person.sayHello());



    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper) {
        var total;
        var discount = 0;

        if(shopper.amount > 200) {
            discount = shopper.amount * .12;
            total = shopper.amount - discount;
        } else {
            total = shopper.amount;
        }

        console.log(
            "The shopper " + shopper.name + " purchased " +
            "$" + shopper.amount + " of goods." +
            " and received a discount of " +
            "$" + discount + " and their final total is: " + total)
    });


    //
    //
    // var discount = shoppers[i].amount * .12;
    // var total = shoppers[i].amount - discount;
    //
    // console.log("amount before discount was " + shoppers[i].amount + ", after is " + total);


    // shoppers.forEach(function(nameD, amountD) {
    //     nameD = shoppers.name;
    //     amountD = shoppers.amount;
    //     if (amountD > 200) {
    //         console.log(nameD + " your amount before discount was " + amountD + ", after is " + (amountD - amountD*.12));
    //     } else {
    //         console.log(nameD + " your amount before discount was " + amountD + ", after is " + amountD);
    //     }
    // });

// function discount() {
//
//     for (var i=1; i<= shoppers.length; i++) {
//         if (shoppers.amount > 200) {
//             return shoppers.amount - shoppers.amount * .12;
//         } else {
//             return shoppers.amount;
//         }
//     }
// }




    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title: "Gringo wśród dzikich plemion",
            author: {
                firstName: "Wojciech",
                lastName: "Cejrowski"
            }
        },
        {
            title: "The Salmon of Doubt",
            author: {
                firstName: "Douglas",
                lastName: "Adams"
            }
        },
        {
            title: "Rising '44: The Battle for Warsaw",
            author: {
                firstName: "Norman",
                lastName: "Davies"
            }
        },
        {
            title: "Bóg w wilekim mieście",
            author: {
                firstName: "Katarzyna",
                lastName: "Olubińska"
            }
        },
        {
            title: "Jeep. Moja wielka przygoda",
            author: {
                firstName: "Tony",
                lastName: "Halik"
            }
        }
        ];
console.log(books);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */





    for (var i=0; i< books.length; i++) {
        console.log("Book # " + (i+1));
        console.log("Title: " + books[i].title);
        console.log("author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }


    books.forEach(function(book, index) {
        console.log("IDL: " + (index + 1));
        console.log("Title: " + book.title);
        console.log("author: " + book.author.firstName + " " + book.author.lastName);
    });






    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     *
     *
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     *
**/
    function createBook (title, first, last) {

        return {
            'title': title,
            'author': {
                'firstName': first,
                'lastName': last
            }
        };
    }

    console.log(createBook("odkrywanie ameryki", "max","kolonko"));



    var books2 = [
        createBook("title1", "firstName1", "lastName1"),
        createBook("title2", "firstName2", "lastName2"),
        createBook("title3", "firstName3", "lastName3"),
        createBook("title1", "firstName4", "lastName4"),
        createBook("title1", "firstName5", "lastName5")

    ];




    

    function showBookInfo(book, index) {
        console.log("#: " + (index + 1));
        console.log("Title: " + book.title);
        console.log("author: " + book.author.firstName + " " + book.author.lastName);
    }
    books2.forEach(function(bookxd, index) {
        showBookInfo(bookxd, index);
    });
    
})();