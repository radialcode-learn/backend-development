const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const verifyToken = req.headers["x-access-token"];
  const authToken = verifyToken.split(" ");
  const token = authToken[0];
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
      console.log(payload, "GGGGGGGGGGGGGGGGGX");
      req.payload = payload;
      next();
    }
  );
};
