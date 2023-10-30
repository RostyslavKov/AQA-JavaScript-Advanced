//Task №1
console.log("Task №1");

const userSettings = {
	username: "john_doe",
	theme: "dark",
	language: "en",
	notifications: true,
};

const serializedData = JSON.stringify(userSettings);
console.log("Serialization");
console.log(serializedData);

const deserializedObject = JSON.parse(serializedData);
console.log("Deserialization");
console.log(deserializedObject);

//Task №2
console.log("Task №2");

async function delayAndLog(message, milliseconds) {
	await new Promise(resolve => {
		setTimeout(resolve, milliseconds);
	});

	console.log(message);
}

async function example() {
	await delayAndLog("Message 1", 3000);
	await delayAndLog("Message 2", 4000);
	await delayAndLog("Message 3", 5000);
}

example();

//Task №3
console.log("Task №3");

async function fetchComments() {
	const response = await fetch(
		"https://jsonplaceholder.typicode.com/comments/1",
	);
	const comments = await response.json();
	return comments;
}

async function fetchPosts() {
	const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
	const posts = await response.json();
	return posts;
}

async function result() {
	try {
		const [comments, posts] = await Promise.all([
			fetchComments(),
			fetchPosts(),
		]);
		console.log("Request for comments:", comments);
		console.log("Request for posts:", posts);

		const raceResult = await Promise.race([fetchComments(), fetchPosts()]);
		console.log("Result of the first completed function (Promise.race):");
		console.log(raceResult);
	} catch (error) {
		console.error("Error occurred while performing a function::", error);
	}
}

result();
