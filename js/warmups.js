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

function getLongestString(arr) {
    let longestStr = "";
    for (let str of arr) {
        if (str.length > longestStr.length) {
            longestStr = str;
        }
    }
    return longestStr;
}

function findLongestWord(str) {
    var longestWord = str.sort(function(a, b) {
        return b.length - a.length;
    });
    return longestWord[0];
}

const colors = ["Green", "Blue", "Periwinkle"];

console.log(findLongestWord(colors));
console.log(getLongestString(colors));

//Write a function that takes in an array of objects
// and returns the object with the largest height property.
const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

// function getTallestHamster(arr) {
//     let tallest = {heightInMM: 0};
//     arr.forEach(function(el){
//         if (el.heightInMM > tallest.heightInMM) {
//             tallest = el;
//         }
//     })
//     return tallest;
// }

function getTallestHamster(arr) {
    var maxValue = {heightInMM: 0};
    for(let i = 0; i < arr.length; i++){
        if(arr[i].heightInMM > maxValue.heightInMM){
            maxValue = arr[i];
        }
    }
    return maxValue;
}

// function getTallestHamster(arr) {
//     for ()
// }

console.log(getTallestHamster(hamsters));;
// should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'],
// gender: "male", dateOfBirth: "September 21"};