const makeSubRequest = () => {
	console.log("Second request comes now")
	const myPromiseOfServerResponse = fetch("http://localhost:3000/api/greet");
	return myPromiseOfServerResponse
}

const handleResolvedPromise = (resolvedPromise) => {
	console.log(resolvedPromise);
}

document.getElementById("reqBtn").addEventListener("click", () => {
	console.log("Req clicked");
	const promiseOfResponse = fetch("http://localhost:3000/api/greet");
	promiseOfResponse
	.then(makeSubRequest)
	.then(handleResolvedPromise) //mivel a válasz is egy promise-al tér vissza, rátehetek mégegy then-t, ami megint csinál valamit a válasszal
});

document.getElementById("logBtn").addEventListener("click", () => {
	console.log("Log clicked")
});