const Article = require("../models/Article");

const getAllNews = async (req, res) => {
  try {
    const articles = await Article.find().sort({ date: -1 }).limit(30);
    res.json(articles);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch news" });
  }
};

module.exports = { getAllNews };
