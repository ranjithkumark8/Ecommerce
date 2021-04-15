const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  discountPrice: { type: Number },
  tags: { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },
  category: { type: String, ref: "category", required: true },
  returnSale: { type: Boolean, required: true },
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
