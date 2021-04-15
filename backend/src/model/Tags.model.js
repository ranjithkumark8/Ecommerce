const mongoose = require("mongoose");

const tagsSchema = new mongoose.Schema({
  tagName: { type: String, required: true },
});

const TagsModel = mongoose.model("tag", tagsSchema);
module.exports = TagsModel;
