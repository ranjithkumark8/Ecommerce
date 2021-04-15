const express = require("express");
const CategoryModel = require("../model/Category.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = await CategoryModel.create(req.body);
  res.status(200).json({ data: data });
});

router.get("/", async (req, res) => {
  const data = await CategoryModel.find({}).lean().exec();
  res.status(200).json({ data });
});

module.exports = router;
