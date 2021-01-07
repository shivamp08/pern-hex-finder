const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  const token = req.header("jwt_token");
  console.log(token);

  if (!token) {
    return res.status(403).json("Authorization Denied.");
  }

  try {
    const verify = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verify.user;
    next();
  } catch (err) {
    res.status(401).json("Token is not valid");
  }
};
