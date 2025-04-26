const mongoose = require("mongoose");

// Create a counter model for generating sequential IDs
const counterSchema = new mongoose.Schema({
  _id: { type: String, required: true },
  seq: { type: Number, default: 0 }
});

const Counter = mongoose.model("Counter", counterSchema);

// Article schema with a numeric ID
const articleSchema = new mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  description: String,
  imageUrl: String,
  sourceUrl: String,
  date: { type: Date, default: Date.now }
});

// Pre-save hook to assign a numeric id to each article
articleSchema.pre("save", async function (next) {
  if (!this.id) {
    try {
      const counter = await Counter.findOneAndUpdate(
        { _id: "articleId" },
        { $inc: { seq: 1 } },
        { new: true, upsert: true }
      );
      this.id = counter.seq;
      next();
    } catch (error) {
      next(error);
    }
  } else {
    next();
  }
});

module.exports = mongoose.model("Article", articleSchema);
