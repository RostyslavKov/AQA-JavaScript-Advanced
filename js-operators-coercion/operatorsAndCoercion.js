//First task
console.log("First task")

const age = 18;
const ageForLicense = age >= 18;

console.log("Driver's license available: " + ageForLicense);

//Second task
console.log("Second task")

const firstName = "Josh";
const secondName = "Jo";
const greeting = "Hi, " + firstName + " and " + secondName + "!";
console.log(greeting);

const  result = greeting + firstName + secondName;
console.log(result);

//Third task
console.log("Third task")

const numberString = "5.489";
const number = parseFloat(numberString); 

if (!isNaN(number)) {
    console.log("The resulting number is not NaN. Value after conversion to number: " + number)
  } else {
    console.log("The resulting number is NaN.")
};

roundedNumber = number.toFixed(1);
console.log("Rounded number: " + roundedNumber);

numberToString = roundedNumber.toString();
console.log("Value in the form of a string: " + numberToString);

//Fourth task
console.log("Fourth task")

const text = "Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikipedia Foundation.";
console.log("String length: " + text.length);

const modifiedText = text.replace("Wikipedia", "Сapybara");
console.log("Modified text: " + modifiedText);

console.log("The string contains the word 'world': " + text.includes("world"));

console.log("The line ends with the word 'Foundation': " + text.endsWith("foundation"));

//Fifth task
console.log("Fifth task")

const П = Math.PI;
const radius = 5; 
const circleArea = (П * Math.pow(radius, 2)).toFixed(2);
console.log("Circle Area: " + circleArea);

const length = 15;
const width = 10;
const rectangleArea = (length * width).toFixed(2);
console.log("Rectangle Area: " + rectangleArea);

const height = 10;
const cylinderVolume = (П * Math.pow(radius, 2) * height).toFixed(2);
console.log("Cylinder Volume: " + cylinderVolume);
