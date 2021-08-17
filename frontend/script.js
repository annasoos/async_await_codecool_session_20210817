
document.getElementById("reqBtn").addEventListener("click", () => {
	console.log("Req clicked");
	let request = new XMLHttpRequest();
	request.open('GET', "http://localhost:3000/api/greet"); //third param "false" would make the request syncronous
	request.onload = function (e) {
		if (request.readyState === 4) {
			if (request.status === 200) {
				console.log(request.responseText);
			}
		}
	}
	request.send(null);
});

document.getElementById("logBtn").addEventListener("click", () => {
	console.log("Log clicked")
});