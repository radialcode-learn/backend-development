//MongoDB connection
const mongoose = require("mongoose");
const config = require("config");
mongoose
  .connect(config.db_host, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection successfully.....");
  })
  .catch((err) => {
    console.log("connection Failed.....", err);
  });
