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

// function getTallestHamster(arr) {
//     var maxValue = {heightInMM: 0};
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].heightInMM > maxValue.heightInMM){
//             maxValue = arr[i];
//         }
//     }
//     return maxValue;
// }
//
// function getTallestHamster(arr) {
//     let tallest = Object.keys(arr).reduce((acc, curr) =>
//     acc.heightInMM ? (arr[curr].heightInMM > acc.heightInMM ? arr[curr] : acc) : arr[curr], {});
//     return tallest;
// }

// function compareNumbers(a, b) {
//     return b.heightInMM - a.heightInMM
// }

function getTallestHamster(arr) {
    let tallest = arr.sort(function(a, b) {
        return b.heightInMM - a.heightInMM;
    });
    return tallest[0];
}

// function getTallestHamster(arr) {
//     var tallest = arr.sort((compareNumbers()) {
//         return tallest[0]
//     });
// }

console.log(getTallestHamster(hamsters));;
// should return {name: "Boss", heightInMM: 120, fur: ['brown', 'white'],
// gender: "male", dateOfBirth: "September 21"};

// Warmup: Write FizzBuzz from 1-100;
// Numbers evenly divisible by 3 should be replaced by Fizz
// Numbers evenly divisible by 5 should be replaced by Buzz
// Numbers evenly divisible by both 3 and 5 should be replaced by FizzBuzz
// All other numbers should be printed in the console.

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

fizzBuzz();


function getAverageHeight(array) {
    let totalHeight = 0;
    for (let element of array) {
        totalHeight += element.heightInMM
    }
    return totalHeight / array.length
}

console.log(getAverageHeight(hamsters));


function getAverageHeight(arr) {
    let total = 0;
    arr.forEach(hamster => {
        total += hamster.heightInMM
    })
    return total / hamsters.length;
}

console.log(getAverageHeight(hamsters)); // should return 93.2;

// #LAO Review
// ##Questions
// 1. Write a function that takes in a grocery item object and returns a string representing the price per item for that object.
//
//     ```
// ex.
let tomatoes = {
	name: 'tomatoes',
	quantity: 20,
	totalPrice: 47
};
//
// getPricePerItem(potatoes) // returns "$2.35"
// ```
//

function getPricePerItem(arr) {
    return arr.totalPrice / arr.quantity
}

console.log(getPricePerItem(tomatoes));


// 2. Write a function that takes in two string arguments: the first being the string assessed, and the second being a single letter. The function should return a count of the occurrences of the letter (second argument) within the string (first argument). This function should count both upper and lowercase instances of the letter.
//
//     ```
// ```
function countOccurrencesOfLetter(string, letter) {
    let count = 0;
    let newLetter = letter.toLowerCase()
    let newString = string.toLowerCase().split('')
    for (let i = 0; i < newString.length; i++) {
        if (newString[i] == newLetter) {
            count++
        }
    }
return "There are " + count + ' occurrences of ' + letter + ' in the string of ' + string
}

console.log(countOccurrencesOfLetter("horseradish", "s")); // returns 2
console.log(countOccurrencesOfLetter("Microsoft Excel: Professional Edition", "E")); // returns 4
console.log(countOccurrencesOfLetter("Sanrio", "x")); // returns 0



//
// 3. Write a function that takes in an array of  grocery item objects and returns the object with the highest `weightInGrams` property.
//
//     ```
// ex.
const cart = [
	{
		name: "Kingsford Charcoal",
		weightInGrams: 4535
	}, {
		name: "Krazy Glue",
		weightInGrams: 5
	}, {
		name: "NVIDIA RTX 4090",
		weightInGrams: 2186
	}
];

// function getHeaviestItem(arr) {
//     let maxValue  = {weightInGrams: 0}
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].weightInGrams > maxValue.weightInGrams) {
//             maxValue.weightInGrams = arr[i].weightInGrams
//         }
//     }
//     return maxValue
// }

function getHeaviestItem(arr) {
    let heaviest = arr.sort(function(a, b) {
        return b.weightInGrams - a.weightInGrams;
    });
    return heaviest[0];
}

console.log(getHeaviestItem(cart)); // returns {name: "Kingsford Charcoal", weightInGrams: 4535}
// ```
//
// 4. Write a function that takes in an array of numbers and returns an array of numbers from the original array that are evenly divisible by 13. If a number is not evenly divisible by 13, it should not be returned. If no elements within the array are evenly divisible by 13, the function should return an empty array.
//
//     ```
// ex.
const arr1 = [24, 25, 26, 27, 29, 39];
const arr2 = [13, 26, 39, 52, 65];
const arr3 = [0, 1, 2, 3, 4, 5];

function getAllDivisibleByThirteen(arr) {
    arr.forEach((num) => {
        arr = arr.filter(num => num % 13 === 0)
    })
    return arr
}

console.log(getAllDivisibleByThirteen(arr1));// returns [26]
console.log(getAllDivisibleByThirteen(arr2)); // returns [13, 26, 39, 52, 65]
console.log(getAllDivisibleByThirteen(arr3)); // returns []
// ```
//
// 5. Write a function that takes in a string and returns an object with the following properties:
//     1. `string` which is to be set the to the argument passed into the function.
// 2. `numberOfWords` which is to be set to the number of words within the string.
// 3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).
//
// ```
// ex.
function countLetters(string, letter) {
    let count = 0;
    let newLetter = letter.toLowerCase()
    let newString = string.toLowerCase().split('')
    for (let i = 0; i < newString.length; i++) {
        if (newString[i] == newLetter) {
            count++
        }
    }
    return count
}
function countWords(string) {
    let arrOfWords = string.split(' ');
    return arrOfWords.filter(word => word !== '').length;
}
function reviewString(string) {
    let newObj = {};
    newObj.string = string;
    newObj.numberOfWords = countWords(string)
    newObj.instancesOfE = countLetters(string, "E")
    return newObj;
}

console.log(reviewString("Dielectric Grease")); // returns {string: "Dielectric Grease", numberOfWords: 2, instancesOfE: 3}
console.log(reviewString("Street Fighter EX3")); // returns {string: "Street Fighter EX3", numberOfWords: 3, instancesOfE: 4}
console.log(reviewString("99")); // returns {string: "99", numberOfWords: 1, instancesOfE: 0}

// # Now That's What I Call LAO Review, vol. 2
// ## Questions
// 1. Write a function that takes in an array of letters, and returns the array sorted in reverse alphabetical order.
function sortLetters(arr) {
    return arr.sort().reverse()
}

console.log(sortLetters(["a", "b", "c"])); // returns ["c", "b", "a"]
console.log(sortLetters(["K", "E", "Y"])); // returns ["Y", "K", "E"]
// ```
// 2. Write a function that takes in a number and returns an object with the following properties.
// 1.  `value` which is to be set to the number passed into the function.
// 2. `doubled` which is to be set to the number passed into the function multiplied by 2.
// 3. `sign` which is to be set to a string, either `"positive"`, `"negative"`, or `"zero"`, corresponding to the value of the number passed into the function being either positive, negative, or 0.

function reviewNumber(num){
    let newObj = {};
    newObj.value = num;
    newObj.doubled = num * 2;
    newObj.sign = num > 0 ? "positive" : num < 0  ? 'negative' : 'zero';
    return newObj;
}

console.log(reviewNumber(16)); // returns {value: 16, doubled: 32, sign: "positive"}
console.log(reviewNumber(-4)); // returns {value: -4, doubled: -8, sign: "negative"}
console.log(reviewNumber(0)); // returns {value: 0, doubled: 0, sign: "zero"}
// ```
// 3. Write a function that takes in a string and returns an array where each element is each word that is in the string passed into the function.
// ```

function arrayOfWords(str){
    return str.split(' ')
}

// ex.
console.log(arrayOfWords("Lovely Day For Coding")); // returns ["Lovely", "Day", "For", "Coding"]
console.log(arrayOfWords("One-eyed One-horned Flying Purple People Eater")); // returns ["One-eyed", "One-horned", "Flying", "Purple", "People", "Eater"]
// arrayOfWords("Toad") // returns ["Toad"]
// ```
// 4. Write a function that takes in a string and number and returns an object with the following properties
// 1. `title` which is to be set to the string passed into the function.
// 2. `price` which is to be set to the number passed into the function.
// 3. `count` which is to be set to 0.
//     ```

function createItem(str, num) {
    let newObj = {title: str, price: num, count: 0}
    // newObj.title = str;
    // newObj.price = num;
    // newObj.count = 0;
    return newObj;
}

console.log(createItem("Pokemon TCG Booster Pack", 10.99)); // returns {title: "Pokemon TCG Booster Pack", price: 10.99, count: 0}
console.log(createItem("Water Bottles (24 Pack)", 27.98)); // returns {title: "Water Bottles (24 Pack)", price: 27.98, count: 0}
// ```
// ​
// // 5. Write a function that takes in an array of objects and returns the object from the array with the most colors in the color property.
//     ```
// ex.
// const hamsters = [
//     {
//         name: "Hamtaro",
//         heightInMM: 86,
//         fur: ['orange', 'white'],
//         gender: "male",
//         dateOfBirth: "August 6"
//     } , {
//         name: "Bijou",
//         heightInMM: 75,
//         fur: ['white'],
//         gender: "female",
//         dateOfBirth: "July 10"
//     } , {
//         name: "Oxnard",
//         heightInMM: 100,
//         fur: ['grey', 'white'],
//         gender: "male",
//         dateOfBirth: "May 3"
//     } , {
//         name: "Boss",
//         heightInMM: 120,
//         fur: ['brown', 'white'],
//         gender: "male",
//         dateOfBirth: "September 21"
//     } , {
//         name: "Snoozer",
//         heightInMM: 85,
//         fur: ['brown', 'white', "pink"],
//         gender: "male",
//         dateOfBirth: "January 14"
//     }
// ];

function getMostColorful(arr) {
    let colorful = arr[0];
    arr.forEach(function (hamster){
        if (hamster.fur.length > colorful.fur.length) {
            colorful = hamster
        }
    })
    return colorful
}
console.log(getMostColorful(hamsters)); //returns {name: "Snoozer", heightInMM: 85, fur: ['brown', 'white', "pink"], gender: "male", dateOfBirth: "January 14"}

//todo #11: Write a function letterWithCount that takes two arguments: a text string, and the second being an integer N. The function should return an array of letters that occur *exactly* N times in the string.

function letterWithCount(str, num) {
	let arr = [];
	let obj = {};
	for (let i = 0; i < str.length; i++) {
		if (obj[str[i]]) {
			obj[str[i]]++;
		} else {
			obj[str[i]] = 1;
		}
	}
	for (let key in obj) {
		if (obj[key] === num) {
			arr.push(key);
		}
	}
	return arr;
}


// ex.
console.log(letterWithCount("abbcccddddeeeeeffffff", 1)); // returns ["a"]
console.log(letterWithCount("abbcccddddeeeeeffffff", 2)); // returns ["b"]
console.log(letterWithCount("abbcccddddeeeeeffffff", 3)); // returns ["c"]
console.log(letterWithCount("abbcccddddeeeeeffffff", 4)); // returns ["d"]
console.log(letterWithCount("abbcccddddeeeeeffffff", 5)); // returns ["e"]
console.log(letterWithCount("abbcccddddeeeeeffffffgggggg", 6)); // returns ["f", "g"]
// Extra credit: return a list of letters that occur *at least* N times.
















