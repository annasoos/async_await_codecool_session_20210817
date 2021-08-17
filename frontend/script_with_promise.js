const getData = (arrivedFetchResponse) => {
	console.log("Second request comes now")
	return arrivedFetchResponse.json()
} // --> kvázi ugyanaz mintha a 14. sorban a then után res.json()-t írnék

const logData = (parsedData) => {
	console.log(parsedData);
}

document.getElementById("reqBtn").addEventListener("click", () => {
	console.log("Req clicked");
	const promiseOfResponse = fetch("http://localhost:3000/api/greet");
	promiseOfResponse
	.then(getData)
	.then(logData) //mivel a válasz is egy promise-al tér vissza, rátehetek mégegy then-t, ami megint csinál valamit a válasszal --> kvázi ugyanaz mintha a 15. sorban a then után console.log(data)-t írnék
});

const handleLogButtonClick = () => {
	console.log("Log clicked")
}

document.getElementById("logBtn").addEventListener("click", handleLogButtonClick);