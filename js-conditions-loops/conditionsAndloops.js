// First task
console.log("First task")

const yearsOfExperience = 5;

let salary;
let bonus;

if (yearsOfExperience <= 0.5) {
    salary = 0;
    bonus = 0;
} else if (yearsOfExperience > 0.5 && yearsOfExperience <= 1){
    salary = 100;
    bonus = salary * 0.01;
} else if (yearsOfExperience > 1 && yearsOfExperience <= 2) {
    salary = 333;
    bonus = salary * 0.03;
} else if (yearsOfExperience > 2 && yearsOfExperience <= 4) {
    salary = 555;
    bonus = salary * 0.04;
} else if (yearsOfExperience > 4 ) {
    salary = 666 ;
    bonus = yearsOfExperience * salary;
}

console.log("Salary: " + salary);
console.log("Bonus: " + bonus);

// Second task
console.log("Second task")

const month = 1; 


switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;
  case 7:
    console.log("July");
    break;
  case 8:
    console.log("August");
    break;
  case 9:
    console.log("September");
    break;
  case 10:
    console.log("October");
    break;
  case 11:
    console.log("November");
    break;
  case 12:
    console.log("December");
    break;
  default:
    console.log("Unknown Month");
}

// Third task
console.log("Third task")

const number = 30

for (let i = 0; i <= number; i++) {
    if (i % 2 === 0 && i !== 0 && i !== 22) {
        console.log(i);
    }
}

//Fourth task
console.log("Fourth task")

const numberA = 22; 
const numberB = 41;

const biggerNumber = (numberA > numberB) ? numberA : numberB
console.log("Bigger number: " + biggerNumber);

//Fifth task
console.log("Fifth task")

let text = "Javascript is fun";
let i = 0;

while (i < text.length) {
  let char = text[i];

  if (char === "a") {
    i++; 
    continue; 
  }
  if (char === "n") {
    break; 
  }
  console.log(char); 
  i++; 
}