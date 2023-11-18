const mongoose = require("mongoose");

const chatSchema = mongoose.Schema(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "user",
    },
    receiver_id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true,
      ref: "user",
    },
    message: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("chatSchema", chatSchema);
