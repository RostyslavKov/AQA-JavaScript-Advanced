//Task №1
console.log("Task №1");

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const combinedArray = [...array1, ...array2];

console.log(combinedArray);

//Task №2
console.log("Task №2");

function multiply(multiplier, ...arguments) {
	return arguments.map(value => multiplier * value);
}

const result = multiply(4, 9, 83, 3);
console.log(result);
