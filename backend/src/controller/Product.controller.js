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

router.get("/Mens", async (req, res) => {
  const data = await ProductModel.find({
    category: { _id: "60784205bbbd6a4acc8250a4" },
  })
    .populate("category")
    .populate("tags")
    .lean()
    .exec();
  res.status(200).json({ data });
});

router.get("/Womens", async (req, res) => {
  const data = await ProductModel.find({
    category: { _id: "6078423fbbbd6a4acc8250a5" },
  })
    .populate("category")
    .populate("tags")
    .lean()
    .exec();
  res.status(200).json({ data });
});

router.get("/Sale", async (req, res) => {
  const data = await ProductModel.find({
    returnSale: true,
  })
    .populate("category")
    .populate("tags")
    .lean()
    .exec();
  res.status(200).json({ data });
});

router.get("/filter/:TagId/category/:CategoryID", async (req, res) => {
  const TagId = req.params.TagId;
  const CategoryID = req.params.CategoryID;
  const data = await ProductModel.find({
    $and: [{ tags: { _id: TagId } }, { category: { _id: CategoryID } }],
  })
    .populate("category")
    .populate("tags")
    .lean()
    .exec();
  res.status(200).json({ data });
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const data = await ProductModel.findByIdAndDelete(id);
  res.status(201).json({ data });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const data = await ProductModel.findById(id)
    .populate("category")
    .populate("tags")
    .lean()
    .exec();
  res.status(201).json({ data });
});

module.exports = router;
