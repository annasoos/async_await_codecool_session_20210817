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