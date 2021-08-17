const fetch = require("node-fetch");

const run = async () => {

	const x = 5;
	const y = "Cica";

	const myFunc = (num) => {
		const res = num + 5
		console.log(res)
	};
	
	const dataFromServer = await fetch("https://rickandmortyapi.com/api/character");
	const data = await dataFromServer.json();
	console.log(data);

	console.log(y);
	myFunc(1);
	console.log("ez utóbb jelenik meg")

};

const resultOfAsync = run();

console.log(resultOfAsync);

console.log("ez előbb jelenik meg");


// SAME FUNCTION WITH TRY-CATCH SOLUTION


/* 
const run = async () => {

	const x = 5;
	const y = "Cica";

	const myFunc = (num) => {
		const res = num + 5
		console.log(res)
	};

	let dataFromServer;
	try {
		dataFromServer = await fetch("https://rickandmortyapi.com/api/character");
	} catch (error) {
		console.log("Fetch not successful")
	}

	if(!dataFromServer) return

	let data;
	try {
		data = await dataFromServer.json();
	} catch (error) {
		console.log("Parse not successful")
	}

	console.log(data);

	console.log(y);
	myFunc(1);
	console.log("ez utóbb jelenik meg")

}; */