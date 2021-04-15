const express = require("express");
const ProductModel = require("../model/Product.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = await ProductModel.create(req.body);
  res.status(200).json({ data });
});

router.get("/", async (req, res) => {
  const data = await ProductModel.find({})
    .populate("tags")
    .populate("category")
    .lean()
    .exec();
  res.status(200).json({ data });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await ProductModel.findByIdAndDelete(id);
  res.status(201).json({ data });
});
module.exports = router;
