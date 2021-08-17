const getData = (arrivedResponse) => {
	console.log("Second request comes now")
	const promiseOfResponseData = arrivedResponse.json()
	return promiseOfResponseData
}

const handleResolvedPromise = (parsedData) => {
	console.log(parsedData);
}

document.getElementById("reqBtn").addEventListener("click", () => {
	console.log("Req clicked");
	const promiseOfResponse = fetch("http://localhost:3000/api/greet");
	promiseOfResponse
	.then(getData)
	.then(handleResolvedPromise) //mivel a válasz is egy promise-al tér vissza, rátehetek mégegy then-t, ami megint csinál valamit a válasszal
});

document.getElementById("logBtn").addEventListener("click", () => {
	console.log("Log clicked")
});