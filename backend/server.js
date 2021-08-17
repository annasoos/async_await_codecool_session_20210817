const express = require('express');
const server = express();
const port = 3000;

server.get('/', (req, res) => {
	setTimeout(() => {
		res.send('Hello World!')
	}, 5000)
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});