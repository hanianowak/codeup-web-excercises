

console.log("Hello from external JS");

alert("Welcome to my Website!");

var color = prompt("Whats your favorite color?");
message = "Great, " + color + " is my favorite color too!";
alert(message);



//     You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
var littleMermaidDays = prompt("For how many you want to keep Little Mermaid?");
var brotherBearDays = prompt("For how many you want to keep Brother Bear?");
var herculesDays = prompt("For how many you want to keep Hercules?");
var pricePerMovie = 3;

console.log(typeof littleMermaidDays);

var littleMermaidTotal = littleMermaidDays * pricePerMovie;
var brotherBearTotal = brotherBearDays * pricePerMovie;
var herculesTotal = herculesDays * pricePerMovie;

message = littleMermaidTotal + brotherBearTotal + herculesTotal;

alert("Your total for all the movies is " + message);



//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;

var googleHours = prompt("how many hours did you work for Google?");
var amazonHours = prompt("how many hours did you work for Amazon?");
var facebookHours = prompt("how many hours did you work for Facebook?");

var googleTotal = googleRate * googleHours;
var amazonTotal = amazonRate * amazonHours;
var facebookTotal = facebookRate * facebookHours;

var payment = googleTotal + amazonTotal + facebookTotal;

alert("Your payment is " + payment);



// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.

var classNotFull = confirm("Are there still free spots?");
var noConflict = confirm("Your new class won't conflict with your current schedule, right?");

var enrollment = classNotFull == true && noConflict == true;

alert("This student can be enrolled: " + enrollment);



//     A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

var items2 = confirm("Do you have more than 2 items?");
var notExpired = confirm("Isn't promotion expired yet?");
var premium = confirm("Are you a premium member?");

var offerApplied = (items2 && notExpired) || premium;

alert("this promotion can be applied: " + offerApplied);