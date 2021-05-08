const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  quantity: { type: Number, required: true },
  size: { type: String, required: true },
});

const OrderModel = mongoose.model("order", orderSchema);
module.exports = OrderModel;
