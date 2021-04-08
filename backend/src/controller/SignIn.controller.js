const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { body, validationResult } = require("express-validator");
const User = require("../model/user.model");

// Need to validate email and password
// need to check if user is present or not
// if not present sent 401
// check matching with password or not

const newToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
};

router.post(
  "/",
  body("email")
    .isEmail()
    .withMessage("Email is required and need to be valid one"),
  body("password").isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(201).json({ errors: errors.array() });
    }
    let user;
    try {
      user = await User.findOne({ email: req.body.email }).exec();
      if (!user) {
        return res.status(401).json({
          status: "failed",
          message: "Your Email or Password is Incorrect",
        });
      }
    } catch (error) {
      // console.log(error);
      return res.status(500).json({ status: "failed", error: error });
    }
    try {
      const match = await user.checkPassword(req.body.password);
      // console.log(match);
      if (!match)
        return res.status(401).json({
          status: "Failed",
          message: "Your Email or Password is Incorrect",
        });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: "failed", message: error });
    }
    const token = await newToken(user);
    return res.status(201).json({ status: "success", token: token });
  }
);
module.exports = router;
