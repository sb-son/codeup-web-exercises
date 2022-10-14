'use strict';

let input = prompt("Enter an odd number between 1 and 50");
while(true) {
    if (input % 2 === 0) {
        input = prompt("Enter an odd number between 1 and 50");
    } else {
        break;
    }
}
for (let i = 1; i < 50; i++) {
    if (input == i) {
        console.log("Yikes! Skipping number: " + input);
    } else if (i % 2 !== 0) {
        console.log('Here is an odd number: ' + i);
    }
}

