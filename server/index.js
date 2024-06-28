/* eslint-disable no-undef */
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const EmployeeModel = require("./models/Food");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://neeraj77:neeraj123@cluster0.5bjcb.mongodb.net/Food"
);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password && user.email === email) {
        res.json("Success");
      } else {
        res.json("The Password is Incorrect");
      }
    }else{
        res.json("User not Found!")
    }
  });
});

app.post("/auth", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(3000, () => {
  console.log("server is running on 3000");
});
