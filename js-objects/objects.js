//Task №1
console.log("Task №1")

const automationQA = {}

automationQA.programmerName = "John"
automationQA.programmingLanguages = "JavaScript"
automationQA.age = 27
automationQA.languages = ["Ukrainian", "English"]
automationQA.preferences = {
	basicPreferences: "table",
}

console.log(automationQA)

//Task №2
console.log("Task №2")

const room = {
	name: "Living Room",
	size: 12,
	window: true,
}

console.log("Room: " + room.name)
console.log("Window: " + room.window)

//Task №3
console.log("Task №3")

const movie = {
	title: "Interstellar",
	releaseYear: 2014,
	genre: "Science fiction",
}

movie.genre = "Action thriller"
movie.title = "John Wick"

movie.actors = { mainRole: "Keanu Reeves", secondRole: "Michael Nyqvist" }
movie.director = "Chad Stahelski"

delete movie.title
console.log(movie)

//Task №4
console.log("Task №4")

const englishBooks = [
	{
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		year: 1960,
	},
	{
		title: "1984",
		author: "George Orwell",
		year: 1949,
	},
	{
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		year: 1925,
	},
]

for (let i = 0; i < englishBooks.length; i++) {
	const book = englishBooks[i]

	if (book.title === "The Great Gatsby") {
		continue
	}
	if (book.year > 1940) {
		console.log(`Title: ${book.title}, Year: ${book.year}`)
	}
	if (book.author === "George Orwell") {
		book.author = "John Wick"
	}
}

console.log(englishBooks)

//Task №5
console.log("Task №5")

const userObject = {
	programmerName: "John",
	programmingLanguages: "JavaScript",
	age: 27,
	language: "English",
	preferences: {
		basicPreferences: "table",
		reqiredPreferences: "coffee",
	},
}

for (let key in userObject) {
	if (typeof userObject[key] === "object") {
		console.log(`${key} - an object inside the object`)
		for (let innerKey in userObject[key]) {
			console.log(`  ${innerKey}: ${userObject[key][innerKey]}`)
		}
	} else {
		console.log(`${key} - ${userObject[key]}`)
	}
}

//Task №6
console.log("Task №6")

const user = {
	name: "John",
	age: 27,
	email: "email123@gm.co",
	address: {
		city: "City",
		postalCode: "42000",
	},
}

function getUserInfo({ name, age }) {
	console.log(`Name: ${name}, Age: ${age}`)
}
function getFullAddress({ email, address: { city, postalCode } }) {
	console.log(`Email: ${email}, Address: ${city}, ${postalCode}`)
}
getUserInfo(user)
getFullAddress(user)

console.log("Task №6 - Advanced")
const getUserInfoAdvanced = ({ name, age }) => `Name: ${name}, Age: ${age}`
const getFullAddressAdvanced = ({ email, address: { city, postalCode } }) =>
	`Email: ${email}, Address: ${city}, ${postalCode}`

console.log(getUserInfoAdvanced(user))
console.log(getFullAddressAdvanced(user))
