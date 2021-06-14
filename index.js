const express = require("express");
const db = require("./data");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Make requests for '/users'");
});


app.get("/users", (req,res) => {
	res.send(db.users.getAll());
});

app.get("/users/:id", (req,res) => {
	const { id } = req.params;
	const user = db.users.get(id);

	user ? res.send(user): res.sendStatus(404);
});


app.post("/users", (req, res) => {
	let user = { ...req.body };

	user ? res.send(db.users.post(user)) : res.sendStatus(400);
});


app.put("/users/:id", (req, res) => {
	const { id } = req.params;
	const user = { ...req.body };
	let updatedObj = user ? db.users.put(id, user): null;

	updatedObj ? res.status(updatedObj) : res.sendStatus(404);
});


app.patch("/users/:id", (req, res) => {
	const { id } = req.params;
	const user = { ...req.body };
	let updatedObj = user ? db.users.patch(id, user): null;

	updatedObj ? res.status(200) : res.status(404);
	res.send(updatedObj);
});


app.delete("/users/:id", (req,res) => {
	const { id } = req.params;
	const user = db.users.delete(id);
	
	user ? res.send(user): res.sendStatus(404);
});










app.listen(3000, ()=>{
	console.clear();
	console.log("listening...");
});