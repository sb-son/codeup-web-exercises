// using for loops
function showMultiplicationTable(num) {
    for(i=1; i <= 10; i++) {
        let product = num * i;
        console.log(num + " x " + i + " = " + product);
    }
}
showMultiplicationTable(7)

function getRandomBetween200And20(max, min) {
    for(i=0; i<10; i++) {
        let randomNum = parseInt(Math.random() * (max - min) + min);
        console.log(randomNum)
        if (randomNum %2 === 0) {
            console.log(randomNum + " is even.");
        }
        else {
            console.log(randomNum + " is odd.");
        }
    }
}
getRandomBetween200And20(201, 20);

for (i = 1; i < 10; i++) {
   let str = "";
    for (j = 0; j < i; j++) {
        str = i + str;
    }
    console.log(str);
}

for (i=100; i>=5; i-=5){
    console.log(i);
}