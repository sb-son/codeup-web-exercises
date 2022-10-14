"use strict";
(function (){
//while
function multiplyByTwo() {
    let i = 1;
    while (i < 65536) {
        i *= 2;
        console.log(i);
    }
}
multiplyByTwo();
//do-while
let allCones = Math.floor(Math.random() * 50) + 50;
console.log("I have " + allCones + " cones to sell.")
do {
    let conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("Cannot sell " + conesBought + " cones I only have " + allCones + " left.")
    } else {
        allCones = allCones - conesBought;
        console.log(conesBought + " cones sold.")
    }
} while (allCones > 0) {
    console.log("All cones sold!")
}
})();