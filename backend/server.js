const express = require('express');
const server = express();
const cors = require("cors");
const port = 3000;

server.use(cors());

server.get('/api/greet', (req, res) => {
	setTimeout(() => {
		res.json({ msg: "Hello World!"})
	}, 5000)
});

server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
});