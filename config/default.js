module.exports = {
  // db_host: "mongodb://localhost:27017/learnbackend",
  db_host:
    "mongodb+srv://palvitiwari913:" +
    encodeURIComponent("Palvi@2106") +
    "@cluster0.wimwde8.mongodb.net/social-media",
  host: "http://localhost:4000",
  imageUrl: "http://localhost:8000/uploads",
  fileUrl: require("path").join(__dirname, "..\\uploads"),
};
