const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
app.use(express.json());
app.use(cors());
const signUpController = require("./controller/SignUp.controller");
const signInController = require("./controller/SignIn.controller");

app.use("/signup", signUpController);
app.use("/signin", signInController);

const start = async () => {
  await connect();
  app.listen(2345, () => {
    console.log("listening to the port 2345");
  });
};

module.exports = start;
