const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  title: String,
  description: String,
  imageUrl: String,
  sourceUrl: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Article", articleSchema);
