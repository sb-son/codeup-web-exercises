"use strict";

console.log('Hello from external JavaScript!');
alert("Welcome to my Website!");

let userInput = prompt('What is your favorite color?');
console.log(userInput + ' is my favorite color too!');
alert(userInput + ' is my favorite color too!')

//exercise 3
//3.1
let littleMermaid = prompt('How many days did you rent Little mermaid?');
let brotherBear = prompt('How many days did you rent Brother bear?');
let hercules = prompt('How many days did you rent Hercules');
let totalDays = parseInt(hercules) + parseInt(brotherBear) + parseInt(littleMermaid);
let totalCost = totalDays * 3;
console.log('Total cost is: ' + totalCost);
alert('Total cost is: ' + totalCost);
//3.2
let google = 400;
let amazon = 380;
let facebook = 350;
let hoursWorkedFacebook = prompt('How many hours did you work at facebook?');
let hoursWorkedGoogle = prompt('How many hours did you work at google?');
let hoursWorkedAmazon = prompt('How many hours did you work at amazon?');
let totalPayment = parseInt(hoursWorkedAmazon * amazon) + parseInt(hoursWorkedGoogle * google) + parseInt(hoursWorkedFacebook * facebook);
console.log('Total pay is: ' + totalPayment);
alert('Total pay is: ' + totalPayment);
//3.3
let classSchedule = confirm('Do you have room in your schedule? Hit OK for yes or cancel for no.');
console.log(classSchedule);
let scheduleConflict = confirm('Is the schedule free of conflict with your current schedule? Hit OK for yes or cancel for no.')
if (classSchedule && scheduleConflict) {
    alert('Student enrolled')
} else {
    alert('Student not enrolled')
}
//3.4
let isMemberPremium = confirm("Is member premium? OK for yes, cancel for no.");
let itemsInCart = prompt('How many items do you have?');
let totalItems = parseInt(itemsInCart);
let productOffer;
let didNotGetProductOffer;
if (isMemberPremium) {
    productOffer = alert('You got the product offer!');
} else if (totalItems > 2) {
    productOffer = alert('You got the product offer!');
} else {
    didNotGetProductOffer = alert('You did not get product offer!')
}
