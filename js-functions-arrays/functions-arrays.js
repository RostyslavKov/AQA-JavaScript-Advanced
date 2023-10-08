//Task №1
console.log("Task №1");

//function declaration
findBiggerNumber(2, 7);
function findBiggerNumber(a,b) {
    if (a > b) {
        console.log(a + " is bigger than");
      } else if (b > a) {
        console.log(b + " is bigger");
      } else {
        console.log(a + " and " + b + " are equal");
    }
}

//function expression
const BiggerNumber = function (a,b) {
    if (a > b) {
        console.log(a + " is bigger");
    } else if (b > a) {
        console.log(b + " is bigger");
    } else {
        console.log(a + " and " + b + " are equal");
    }
}
BiggerNumber(3, 6);

//arrow function
let myFunction = (a, b) => {
    const result = a > b ? a : b;
    console.log(result + " is bigger");
}
myFunction(7, 9);

//Task №2
console.log("Task №2");

function recursiveFunction(value) {
    console.log(value);
    
    if (value < 20) {
      recursiveFunction(value + 1);
    }
}
  
recursiveFunction(2);

// Task №3
console.log("Task №3");

let nestedArray = [["apple", "banana", "dog"],["cherry", "cat", "elephant"],["red", "green", "cat"]];

function checkForCat(arr) {
    for (let subArray of arr) {
      for (let item of subArray) {
        if (item === "cat") {
          return true;
        }
      }
    }
    return false;
}

const catFound = checkForCat(nestedArray);

if (catFound) {
    console.log("Сat wasn found");
} else {
    console.log("Сat wasn`t found");
}

// Task №4
console.log("Task №4");

function divideArray(numbers) {
    try {

        const result = [];

        if (numbers.length < 2) {
            throw new Error("The number of elements in the array must be at least 2");
        }

        for (let i = 1; i < numbers.length; i++) {

            if (numbers[i - 1] === 0) {
            throw new Error("The previous element cannot be 0");
            }

            if (typeof numbers[i] !== "number") {
            throw new Error("An element is not a number");
            }

            result.push(numbers[i] / numbers[i - 1]);
        }

        return result;
    }   
    catch (error) {
        return error.message;
    } finally {
        console.log("Сompleted");
    }
}

console.log(divideArray([10, 2, 5, 7]));
console.log(divideArray([5, 0, 2])); 
console.log(divideArray([10, 'abc', 2])); 
console.log(divideArray([3])); 

// Task №5
console.log("Task №5 - a");

const array = [1, 8, 10, 11, -8, 17, 20, 22, 40, 37, 45, 0, 3, 45, 56]
const result = array.filter((number) => number % 2 !== 0);
console.log(result)


console.log("Task №5 - b");
const arrayColors = ["yellow", "green", "apple", "red", "pink" ];
arrayColors.sort((a, b) => a.localeCompare(b));
console.log(arrayColors);


// Task №6
console.log("Task №6");

const arrayNumbers = [1, 8, 10, 11];
const arrayColor = ["yellow", "green"];

const newArray = arrayNumbers.concat(arrayColor);
console.log(newArray);


// Task №7
console.log("Task №7");

let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum of all elements: " + sum);
