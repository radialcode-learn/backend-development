const signUp = require("../schema/signUp");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  console.log(req.body, "==============================");
  const singnUpValidation = await signUp.find({ email: req.body.email });
  if (singnUpValidation.length === 0) {
    const signUpDetails = new signUp({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
    });
    const signUpDetailsSave = await signUpDetails.save();
    const token = jwt.sign(
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
      },
      "this is dummy user for learn backend",
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json({
      success: true,
      message: "signup",
      signUpDetails: signUpDetailsSave,
      token: token,
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "User already exist",
    });
  }
};
