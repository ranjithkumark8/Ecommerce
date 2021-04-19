const jwt = require("jsonwebtoken");
const User = require("../model/user.model");
require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
      if (err) return reject(err);
      //   console.log(err, payload);
      return resolve(payload);
    });
  });
};

const protect = async (req, res, next) => {
  // Getting token from the frontend
  const bearer = req.headers.authorization;
  //   console.log(bearer);
  //   Verifying the Token
  const token = bearer.split(" ")[1].trim();
  //   console.log(token);
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).json({
      status: "Failed",
      message: "Something Went Wrong",
    });
  }

  let tempUser;
  try {
    tempUser = User.findById(payload.id).lean().exec();
  } catch (e) {
    // console.log(e, "eeee");
    return res
      .status(500)
      .json({ status: "failed", message: "Something went wrong" });
  }

  if (!tempUser) {
    return res.status(401).json({
      status: "Failed",
      message: "Your email or password is not correct",
    });
  }

  req.user = tempUser;
  next();
};

module.exports = protect;
