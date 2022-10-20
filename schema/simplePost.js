const mongoose = require("mongoose");

const simplePost = mongoose.Schema(
  {
    description: { type: String },
    userId: { type: String, require: true },
    title: { type: String },
    filePath: { type: String },
    file: { type: String },
    like: { type: Number },
    dislike: { type: Number },
    isLike: { type: Boolean },
    isDislike: { type: Boolean },
    user: { type: Object },
    total_comment: { type: Number },
  },
  { timestamp: true }
);
module.exports = mongoose.model("simplePost", simplePost);
