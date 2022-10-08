const Router = require("express").Router();
const allUser = require("../module/allUser");
const auth = require("../module/auth");
const changePassword = require("../module/changePassword");
const createPost = require("../module/createPost");
const login = require("../module/login");
const updateMe = require("../module/updateMe");
const userDetails = require("../module/userDetails");
const userDetailsForm = require("../module/userDetailsForm");
const VerifyToken = require("./VerifyToken");
const UploadImage = require("../module/UploadImage");
const myPost = require("../module/myPost");
const globalPost = require("../module/globalPost");
const multer = require("multer");
const path = require("path");

const upload_folder = path.join(__dirname, "../uploads");

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, upload_folder);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
});

Router.post("/signup", auth);
Router.post("/login", login);
Router.get("/all-user", VerifyToken, allUser);
Router.get("/all-user", VerifyToken, allUser);
Router.get("/me", VerifyToken, userDetails);
Router.post("/update/me", VerifyToken, updateMe);
Router.post("/add/user-details", VerifyToken, userDetailsForm);
Router.post("/create/post", VerifyToken, createPost);
Router.get("/my-post", VerifyToken, myPost);
Router.get("/global-post", VerifyToken, globalPost);
Router.post("/change-password", VerifyToken, changePassword);
Router.post("/check-image", UploadImage);
Router.post("/upload", upload.single("file"), (req, res, next) => {
  if (req.file) {
    return res.json({
      success: true,
      message: "file uploaded successfully",
      filename: req.file.filename,
    });
  }
});

Router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "welcome",
  });
});
module.exports = Router;
