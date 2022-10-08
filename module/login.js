const signUp = require("../schema/signUp");
const jwt = require("jsonwebtoken");

module.exports = async (req, res) => {
  await signUp
    .find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length === 0) {
        return res.status(400).json({
          success: false,
          message: "No user exist",
        });
      } else {
        if (
          user[0].email === req.body.email &&
          user[0].password === req.body.password
        ) {
          const token = jwt.sign(
            {
              _id: user[0]._id,
              email: user[0].email,
            },
            "this is dummy user for learn backend",
            {
              expiresIn: "24h",
            }
          );
          return res.status(200).json({
            success: true,
            message: "user login successfully",
            userDetail: user,
            token: token,
          });
        } else {
          return res.status(404).json({
            success: false,
            message: "email and password is not correct",
          });
        }
      }
    })
    .catch((err) => {
      res.status(500).josn({
        err: err,
      });
    });
};
