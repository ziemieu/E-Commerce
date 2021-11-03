const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  gender: String,
  mobile: Number,
});

module.exports = mongoose.model("User", userSchema);
