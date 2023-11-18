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
const disLike = require("../module/dislike");
const multer = require("multer");
const path = require("path");
const like = require("../module/like");
const comment = require("../module/comment");
const getComment = require("../module/getComment");
const searchUser = require("../module/searchUser");
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

Router.get("/", (req, res) => {
  return res.status(200).json({
    message: "server started",
  });
});

Router.post("/signup", auth);
Router.post("/login", login);
Router.get("/all-user", VerifyToken, allUser);
Router.get("/me", VerifyToken, userDetails);
Router.post("/update/me", VerifyToken, updateMe);
Router.get("/search/:searchValue", VerifyToken, searchUser);
Router.post("/add/user-details", VerifyToken, userDetailsForm);
Router.post("/create/post", VerifyToken, createPost);
Router.get("/my-post", VerifyToken, myPost.CreatePostApiHandler);
Router.put("/my-post/like", VerifyToken, like);
Router.put("/my-post/dislike", VerifyToken, disLike);
Router.put("/my-post/comment", VerifyToken, comment);
Router.get("/global-post", VerifyToken, globalPost);
Router.get("/my-post/comment/:commentId", VerifyToken, getComment);
Router.post("/change-password", VerifyToken, changePassword);
Router.post("/check-image", UploadImage);
Router.delete("/my-post/:postId", myPost.DeletePostApiHandler);
// Router.post("/todo", Todo);

Router.post("/upload", upload.single("file"), (req, res, next) => {
  if (req.file) {
    return res.json({
      success: true,
      message: "file uploaded successfully",
      filename: req.file.filename,
    });
  }
});
module.exports = Router;
