const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");

app.use(cors());

app.get("/get-team/:teamname", (req, res) => {
	const data = fs.readFileSync("playerlist.json", { encoding: "utf-8" });
	const players = JSON.parse(data);
	let myPlayers = [];
	players.forEach(element => {
		if (element.team === req.params.teamname) {
			myPlayers.push(element);
		}
	});
	res.send(myPlayers);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
