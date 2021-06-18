const express = require("express");
const db = require("./data");
const util = require("./utility");
const showdown = require("showdown");
const app = express();
const fs = require("fs");

app.use(express.json());

app.get("/", (req, res) => {
	fs.readFile("./README.md", "utf8", (err, data,)=>{
		const converter = new showdown.Converter();
		let htmlData = converter.makeHtml(data);
		res.send(htmlData);
	});
});


app.get("/api/users", db.auth.isAuthorized, (req,res) => {
	if (util.emptyObject(req.query))
		return res.send(db.users.getAll());
	
	const result = db.users.query(req.query);
	res.send(result);
});

app.get("/api/users/:id", db.auth.isAuthorized, (req,res) => {
	const { id } = req.params;
	const user = db.users.get(id);

	user ? res.send(user): res.sendStatus(404);
});


app.post("/api/users", db.auth.isAuthorized, (req, res) => {
	let user = { ...req.body };

	user ? res.send(db.users.post(user)) : res.sendStatus(400);
});


app.put("/api/users/:id", db.auth.isAuthorized, (req, res) => {
	const { id } = req.params;
	const user = { ...req.body };
	let updatedObj = user ? db.users.put(id, user): null;

	updatedObj ? res.status(updatedObj) : res.sendStatus(404);
});


app.patch("/api/users/:id", db.auth.isAuthorized, (req, res) => {
	const { id } = req.params;
	const user = { ...req.body };
	let updatedObj = user ? db.users.patch(id, user): null;

	updatedObj ? res.status(200) : res.status(404);
	res.send(updatedObj);
});


app.delete("/api/users/:id", db.auth.isAuthorized, (req,res) => {
	const { id } = req.params;
	const user = db.users.delete(id);
	
	user ? res.send(user): res.sendStatus(404);
});




app.listen(3000, ()=>{
	console.clear();
	console.log("listening...");
});
