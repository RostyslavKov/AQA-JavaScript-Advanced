//Task №3 
console.log("Task №3");

class ProductClass {

    constructor (name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.price * this.quantity;
    }

    purchase(quantity) {
        if (this.quantity === 0) {
          console.log(`There is no product in stock - ${this.name}.`);
        } else if (this.quantity >= quantity) {
          this.quantity -= quantity;
          console.log(`You bought a product: ${this.name}. There are  ${this.quantity} ${this.name} left in stock.`);
        } else {
          console.log(`There are not enough ${this.name} in stock to purchase. There are only ${this.quantity} ${this.name} left in stock.`);
        }
    }

}

const tShirt = new ProductClass("T-shirt", 20, 100);
const jeans = new ProductClass("Jeans", 30, 50);
const hat = new ProductClass("Hat", 60, 30);

console.log(`Total cost of T-shirts: $${tShirt.getTotalPrice()}`);
console.log(`Total cost of jeans: $${jeans.getTotalPrice()}`);
console.log(`Total cost of hats: $${hat.getTotalPrice()}`);

tShirt.purchase(5);
jeans.purchase(2);
hat.purchase(7);

//Task №4 
console.log("Task №4");

class CarClass {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
    }

    accelerate(speed) {
        this.speed += speed;
    }

    brake(speed) {
        if (this.speed - speed >= 0) {
            this.speed -= speed;
        } else {
            this.speed = 0;
        }
    }

    getCarInfo() {
        return `Car: ${this.make} ${this.model} (${this.year})`;
    }
}

class AudiClass extends CarClass {
    constructor(make, model, year, color) {
        super(make, model, year);
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    myCurrentColor() {
        return `Current color: ${this.color}`;
    }

    getCarInfo() {
        return super.getCarInfo() + `, Color: ${this.color}`;
    }
}

const myAudi = new AudiClass("Audi", "Q7", 2023, "Black");

console.log(myAudi.getCarInfo()); 
myAudi.accelerate(60);
myAudi.brake(20);
console.log(myAudi.getCarInfo());
console.log(myAudi.myCurrentColor()); 
myAudi.color = "Red";
console.log(myAudi.myCurrentColor()); 

//Task №5 
console.log("Task №5");

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

class PeopleRegistry extends Person {
    constructor() {
        super();
        this.people = [];
    }

    addPerson(person) {
        this.people.push(person);
    }

    removePerson(firstName, lastName) {
        this.people = this.people.filter(person => person.firstName !== firstName || person.lastName !== lastName);
    }

    findPerson(firstName, lastName) {
        return this.people.find(person => person.firstName === firstName && person.lastName === lastName);
    }

    listPeople() {
        this.people.forEach(person => {
            console.log(`Name: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
        });
    }
}

const registry = new PeopleRegistry();

const person1 = new Person("John", "Wick", 42);
const person2 = new Person("Jotaro ", "Kujo ", 19);

registry.addPerson(person1);
registry.addPerson(person2);

console.log("List of people in the registry:");
registry.listPeople();

const foundPerson = registry.findPerson("John", "Wick");
console.log("Found person:");
console.log(foundPerson);

registry.removePerson("John", "Wick");
console.log("List of people after removing person:");
registry.listPeople();

