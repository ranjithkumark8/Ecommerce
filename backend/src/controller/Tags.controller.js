const express = require("express");
const TagsModel = require("../model/Tags.model");
const router = express.Router();

router.post("/", async (req, res) => {
  const data = await TagsModel.create(req.body);
  res.status(200).json({ data });
});

router.get("/", async (req, res) => {
  const data = await TagsModel.find({}).lean().exec();
  res.status(200).json({ data });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const data = await TagsModel.findByIdAndDelete({ _id: id });
  res.status(201).json({ data });
});
module.exports = router;
