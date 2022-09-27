const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  console.log("verifyToken", req.headers["x-access-token"]);
  const verifyToken = req.headers["x-access-token"];
  const authToken = verifyToken.split(" ");
  const token = authToken[0];
  console.log("verifyToken", token);
  await jwt.verify(
    token,
    "this is dummy user for learn backend",
    (err, payload) => {
      if (err) {
        // return next(createError.Unauthorizes());
        return res.status(404).json({
          success: false,
          message: "token not found",
        });
      }
      console.log("payload", payload);
      req.payload = payload;
      next();
    }
  );
};
