const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { body, validationResult } = require("express-validator");

const User = require("../model/user.model");

const newToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET_KEY);
};

router.post(
  "/",
  body("first_name").trim().notEmpty().withMessage("First Name is Required"),
  body("last_name").trim().notEmpty().withMessage("Last Name is Required"),
  body("email")
    .isEmail()
    .withMessage("Email is required and need to be valid one"),
  body("password")
    .trim()
    .isLength({ min: 8 })
    .withMessage("Password need to be At least 8 characters long"),
  async (req, res) => {
    //   Check for any validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(201).json({ errors: errors.array() });
    }
    // Creating a token with reference to user id and sending it.
    try {
      const user = await User.create(req.body);
      const token = newToken(user);
      return res.status(201).json({ status: "Success", token });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ status: "Failed", errors: e });
    }
  }
);

// router.get("/", async (req, res) => {
//   const user = await User.find({}).lean().exec();
// });
module.exports = router;
