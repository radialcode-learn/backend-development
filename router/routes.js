const Router = require("express").Router();
const allUser = require("../module/allUser");
const auth = require("../module/auth");
const changePassword = require("../module/changePassword");
const login = require("../module/login");
const updateMe = require("../module/updateMe");
const userDetails = require("../module/userDetails");
const userDetailsForm = require("../module/userDetailsForm");
const VerifyToken = require("./VerifyToken");

Router.post("/signup", auth);
Router.post("/login", login);
Router.get("/all-user", VerifyToken, allUser);
Router.get("/all-user", VerifyToken, allUser);
Router.get("/me", VerifyToken, userDetails);
Router.post("/update/me", VerifyToken, updateMe);
Router.post("/add/user-details", VerifyToken, userDetailsForm);
Router.post("/create/post", VerifyToken, userDetailsForm);
Router.post("/change-password", VerifyToken, changePassword);

Router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "welcome",
  });
});

module.exports = Router;
