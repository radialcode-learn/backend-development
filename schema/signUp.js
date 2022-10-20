const mongoose = require("mongoose");

const signUpSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  city: { type: String },
  country: { type: String },
  profileImage: { type: String },
  filePath: { type: String },
});
module.exports = mongoose.model("signUp", signUpSchema);
