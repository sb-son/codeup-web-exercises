"use strict";

console.log('Hello from external JavaScript!');
alert("Welcome to my Website!");

var userInput = prompt('What is your favorite color?');
console.log(userInput + ' is my favorite color too!');
alert(userInput + ' is my favorite color too!')

//exercise 3
var littleMermaid = prompt('How many days did you rent Little mermaid?');
var brotherBear = prompt('How many days did you rent Brother bear?');
var hercules = prompt('How many days did you rent Hercules');
var totalDays = parseInt(hercules) + parseInt(brotherBear) + parseInt(littleMermaid);
var totalCost = totalDays * 3;
console.log('Total cost is: ' + totalCost);

var google = 400;
var amazon = 380;
var facebook = 350;
var hoursWorkedFacebook = prompt('How many hours did you work at facebook?');
var hoursWorkedGoogle = prompt('How many hours did you work at google?');
var hoursWorkedAmazon = prompt('How many hours did you work at amazon?');
var totalPayment = parseInt(hoursWorkedAmazon * amazon) + parseInt(hoursWorkedGoogle * google) + parseInt(hoursWorkedFacebook * facebook);
console.log('Total pay is: ' + totalPayment);

var classSchedule = confirm('Do you have room in your schedule? Hit OK for yes or cancel for no.');
console.log(classSchedule);
var scheduleConflict = confirm('Is the schedule free of conflict with your current schedule? Hit OK for yes or cancel for no.')
if (classSchedule && scheduleConflict) {
    alert('Student enrolled')
} else {
    alert('Student not enrolled')
}


var isMemberPremium = confirm("Is member premium? OK for yes, cancel for no.");
var itemsInCart = prompt('How many items do you have?');
var totalItems = parseInt(itemsInCart);
var productOffer;
var didNotGetProductOffer;
if (isMemberPremium) {
    productOffer = alert('You got the product offer!');
} else if (totalItems > 2) {
    productOffer = alert('You got the product offer!');
} else {
    didNotGetProductOffer = alert('You did not get product offer!')
}
