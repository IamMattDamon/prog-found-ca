//javascript

// QUESTION 1
var currency = "usd";

// QUESTION 2
var person = {
    name: "Gary",
    age: "30"
};

// QUESTION 3
var outOfStock = true;
if(outOfStock === true) {
    console.log("Out of stock");
}
else {
    console.log("In stock");
};

// QUESTION 4
var numbers = [5, 20, 100, 500, 1000];

for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
};

// QUESTION 5
for(var count = 15; count <= 25; count++) {
    console.log(count);
};

// QUESTION 6
for(var count = 15; count <= 25; count++) {
    if(count === 20) {
        console.log(count);
    };
};

// QUESTION 7
var files = [
    {
        filesUrl: "c:/users/corp/programfiles/stored/project1",
        filesCounter: 12,
        filesBackedUp: true
    },
    {
        filesUrl: "c:/users/corp/programfiles/stored/project2",
        filesCounter: 33,
        filesBackedUp: false
    }
];

for(var i = 0; i < files.length; i++) {
    console.log(files[i].filesCounter);
    console.log(files[i].filesBackedUp);
}

// QUESTION 8
function whatIDontLike(losing) {
    console.log("I don't like " + losing);
}
whatIDontLike("racism");
    
// QUESTION 9
function subtractTwoNumbers(number1, number2) {
    var sum = number2 - number1;
    console.log(sum);
}
subtractTwoNumbers(19, 10);

// QUESTION 10
var emptyArray = [];
function addNumber(randomNumber) {
    emptyArray.push(randomNumber);
}
addNumber(21);
console.log(emptyArray);

