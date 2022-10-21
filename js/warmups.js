"use strict";

// Write a function that when passed an object will return the value of the object’s price property.
//     Ex. let obj = {name: “Potatoes”, quantity: 2, price: “$7.89”};
// getPrice(obj); // returns “$7.89”

let potatoes = {
    name: "Potatoes",
    quantity: 2,
    price: '$7.89'
};
function getPrice(obj) {
    return obj.price;
}
console.log(getPrice(potatoes));

// Write a function that when passed an array will return the longest string from the array.
//     Ex. const arr = [“Green”, “Blue”, “Periwinkle”];
// getLongestString(arr) // Returns “Periwinkle”


// function getLongestString() {
//     let longestStr = '';
//     for (let i = 0; i < colors.length; i++) {
//             console.log(colors);
//     }
// }

//getLongestString()

function getLongestString(arr) {
    let longestStr = "";
    for (let str of arr) {
        if (str.length > longestStr.length) {
            longestStr = str;
        }
    }
    return longestStr;
}

const colors = ["Green", "Blue", "Periwinkle"];

console.log(getLongestString(colors))