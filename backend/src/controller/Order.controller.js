const express = require("express");
const protect = require("../Middleware/protect");
const OrderModel = require("../model/Order.model");
const router = express.Router();

router.post("/", protect, async (req, res) => {
  const user = await req.user;
  //   console.log(user._id);
  const body = {
    userId: user._id,
    productId: req.body.id,
    quantity: req.body.qty,
    size: req.body.size,
  };
  //   console.log(body, user);
  const data = await OrderModel.create(body);
  // console.log(data);
  res.status(200).json({ data });
});

router.get("/userOrders", protect, async (req, res) => {
  const user = await req.user;
  // console.log(user._id);
  const data = await OrderModel.find({ userId: user._id })
    .populate("userId")
    .populate("productId")
    .lean()
    .exec();
  // console.log(data);
  res.status(201).json({ data });
});

router.delete("/:id", async (req, res) => {
  // const user = await req.user
  const id = req.params.id;
  // console.log(id);
  const data = await OrderModel.findByIdAndDelete(id);
  res.status(204).end();
});
module.exports = router;
