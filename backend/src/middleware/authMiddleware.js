const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const authMiddleware = async (req, resizeBy, next) => {
  const token = req.cookies.token;
  if (!token) {
    return resizeBy
      .status(401)
      .json({ message: "No token found, Please login and try again." });
  }
  if (token) {
    try {
      const decode = jwt.verify(token, process.env.JWR_SECRET);
      const user = await User.findById(decode._id);
      if (!user) {
        return res
          .status(401)
          .json({
            message: "User not found, Please login with a different accoutn",
          });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error("Token Verification failed: ", error);
      res.status(401).json({
        message: "Invalid or expired token! Please log in and try again!",
      });
    }
  }
};

module.exports = authMiddleware;