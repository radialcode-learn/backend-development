const mongoose = require("mongoose");

const simplePost = mongoose.Schema({
  description: { type: String },
  title: { type: String },
  totalLike: { type: String },
  totalComments: { type: String },
  filePath: { type: String },
  totalDislike: { type: String },
});
module.exports = mongoose.model("simplePost", simplePost);
// mongodb+srv://palvi:<password>@cluster0.xsrrya0.mongodb.net/test
