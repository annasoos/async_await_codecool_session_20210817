const fetch = require("node-fetch");
const fs = require("fs");

try {

	const content = fs.readFileSync("./myFile.txt");
	console.log(content);

} catch (e) {

	console.log("File not found")

} finally {

}