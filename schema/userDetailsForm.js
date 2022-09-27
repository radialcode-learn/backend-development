const mongoose = require("mongoose");

const userDetailsForm = mongoose.Schema({
  firstName: { type: String },
  lastName: { type: String },
  email: { type: String },
  phone: { type: String },
  address: { type: String },
  city: { type: String },
  country: { type: String },
  zipCode: { type: String },
  userId: { type: String },
});
module.exports = mongoose.model("userDetailsForm", userDetailsForm);
