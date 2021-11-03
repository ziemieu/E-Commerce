const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
//const member = require("../models/Members");

// Get ALl Users
router.get("/users", (req, res) => {
  //console.log("All Users Route Connected");
  User.find()
    .then((data) => {
      res.send({ message: "List All User", data: data });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured" });
    });
});

// Get Single Course
router.get("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findOne({ _id: id })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("No Data Found");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

//Add New Users
router.post("/users", (req, res) => {
  console.log(req.body);
  //   const title = req.body.title;
  //   const description = req.body.description;
  //   const duration = req.body.duration;
  //   const price = req.body.price;
  const { email, password, name, gender, mobile } = req.body;

  // Create a Course Object
  const newUser = new User({
    email,
    password,
    name,
    gender,
    mobile,
  });

  // Save Course in Database
  // Save Note in the database
  newUser
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

// Edit Single Course
router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findOneAndUpdate({ _id: id }, req.body)
    .then((data) => {
      if (data) {
        res.send({ msg: "User Updated", data });
      } else {
        res.send("No Data Found");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

// Delete Single Course
router.delete("/users/:id", (req, res) => {
  const id = req.params.id;
  User.findOneAndDelete({ _id: id })
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.send("No Data Found");
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred",
      });
    });
});

module.exports = router;
