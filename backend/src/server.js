const express = require("express");
const cors = require("cors");
const connect = require("./config/db");
const app = express();
app.use(express.json());
app.use(cors());
const signUpController = require("./controller/SignUp.controller");
const signInController = require("./controller/SignIn.controller");
const categoryController = require("./controller/Category.controller");
const tagsController = require("./controller/Tags.controller");
const productController = require("./controller/Product.controller");
const orderController = require("./controller/Order.controller");

app.use("/signup", signUpController);
app.use("/signin", signInController);
app.use("/category", categoryController);
app.use("/tag", tagsController);
app.use("/products", productController);
app.use("/order", orderController);

const start = async () => {
  await connect();
  app.listen(2345, () => {
    console.log("listening to the port 2345");
  });
};

module.exports = start;
