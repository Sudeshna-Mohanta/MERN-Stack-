const { timeStamp } = require("console");
const express = require("express");
const fs = require("fs");
require("dotenv").config();
const mongoose = require("mongoose");

// server
const app = express();

// middlewares
app.use(express.json());

// schema
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// model
const Student = mongoose.model("students", studentSchema);

// connection
mongoose
  .connect(process.env.MONGODBURL)
  .then(() => console.log("Mongodb connected successfully!"))
  .catch((error) => console.log("Error", error));

// routes
app.get("/", (req, res) => {
  res.json("API is working perfectly!");
});

// create a user
app.post("/api/post", async (req, res) => {
  const { name, email } = req.body;
  if (!email || !name) {
    res.status(400).json({ msg: "Please fill the details" });
  } else {
    await Student.create({ name, email });
    res.status(201).json({ msg: "Successfull!" });
  }
});

// start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
