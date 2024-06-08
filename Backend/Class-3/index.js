// import modules here
const express = require("express");
const fs = require("fs"); //syntax
require("dotenv").config();
const greeting = require("./data");

//setup server
const app = express();
app.use(express.json());

//middleware
app.use((req, res, next) => {
  greeting();
  next();
});

//middlewares
// app.use((req, res, next) => {
//   console.log("Hello from Middleware");
//   next();
// });

app.get("/", (req, res) => {
  res.json({ msg: "Hello from server " });
});

app.get("/service", (req, res) => {
  res.json({ msg: "Hello from service " });
});

app.get("/write", (req, res) => {
  const myName = "Sudeshna Mohanta";
  fs.writeFileSync("logs.txt", myName);
  res.json({ msg: "Succesfully created" });
});

app.get("/read", (req, res) => {
  const data = fs.readFileSync("./logs.txt", "utf-8");
  res.send(data);
});

app.get("/append", (req, res) => {
  const sentence = "I am a student";
  fs.appendFileSync("logs.txt", sentence);
  res.json({ msg: "Successfully appended " });
});

app.post("/post", (req, res) => {
  const user = req.body;
  res.send(user);
  fs.writeFileSync("./logs.txt", JSON.stringify(user));
});

//start the server
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
