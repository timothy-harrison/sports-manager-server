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

app.get("/trade/:tradeData", (req, res) => {
	const data = JSON.parse(req.params.tradeData);
	console.log(data);
	res.send(JSON.stringify(data, null, 2));
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
