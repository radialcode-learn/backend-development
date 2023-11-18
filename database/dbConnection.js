const mongoose = require("mongoose");
mongoose
  //Server connection URL
  .connect(
    "mongodb+srv://palvitiwari913:Palvi1234@cluster0.wimwde8.mongodb.net/social-media",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "social-media",
    }
  )
  .then(() => {
    console.log("connection successfully.....");
  })
  .catch((err) => {
    console.log("Oops connection Failed.....", err);
  });
