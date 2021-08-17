
document.getElementById("reqBtn").addEventListener("click", async () => {
	console.log("Req clicked");

	const res = await fetch("http://localhost:3000/api/greet")
	const data = await res.json()
	console.log(data)
	console.log("end")
});

const handleLogButtonClick = () => {
	console.log("Log clicked")
}

document.getElementById("logBtn").addEventListener("click", handleLogButtonClick);