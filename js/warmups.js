"use strict";

let potatoes = {
    name: "Potatoes",
    quantity: 2,
    price: '$7.89'
};

function getPrice(obj) {
    return obj.price;
}

console.log(getPrice(potatoes));
