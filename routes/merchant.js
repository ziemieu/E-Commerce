const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();
const Merchant = require("../models/Merchant");
//const member = require("../models/Members");

// Get All Merchant
router.get("/merchant", (req, res) => {
  //console.log("All Users Route Connected");
  Merchant.find()
    .then((merchant) => {
      res.send({ message: "List All User", data: merchant });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message || "Some error occured" });
    });
});

// Get Single Course
router.get("/merchant/:id", (req, res) => {
  const id = req.params.id;
  Merchant.findOne({ _id: id })
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
router.post("/merchant", (req, res) => {
  console.log(req.body);
  //   const title = req.body.title;
  //   const description = req.body.description;
  //   const duration = req.body.duration;
  //   const price = req.body.price;
  const { email, password, name, gender, mobile } = req.body;

  // Create a Course Object
  const newMerchant = new Merchant({
    email,
    password,
    name,
    gender,
    mobile,
  });

  // Save Course in Database
  // Save Note in the database
  newMerchant
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
router.put("/merchant/:id", (req, res) => {
  const id = req.params.id;
  Merchant.findOneAndUpdate({ _id: id }, req.body)
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
router.delete("/merchant/:id", (req, res) => {
  const id = req.params.id;
  Mercahnt.findOneAndDelete({ _id: id })
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
