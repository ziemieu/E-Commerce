const mongoose = require("mongoose");

const merchantSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  gender: String,
  mobile: Number,
});

module.exports = mongoose.model("Merchant", merchantSchema);
