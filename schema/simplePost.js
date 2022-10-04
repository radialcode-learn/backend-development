const mongoose = require("mongoose");

const simplePost = mongoose.Schema({
  description: { type: String },
  userId: { type: String, require: true },
  title: { type: String },
  filePath: { type: String },
  file: { type: String },
  like: { type: Number },
  dislike: { type: Number },
  user: { type: Object },
  total_comment: { type: Number },
});
module.exports = mongoose.model("simplePost", simplePost);
// mongodb+srv://palvi:<password>@cluster0.xsrrya0.mongodb.net/test
