const express = require("express");
const { getAllNews } = require("../controllers/newsController.js");
const scrapeAgriNews = require("../scraper/scrapeAgriNews"); // Import the scraper
const router = express.Router();

router.get("/api/news", getAllNews);

router.get("/api/scrape-news", async (req, res) => {
  try {
    console.log("Starting the scrape...");
    await scrapeAgriNews();  
    res.status(200).json({ message: "Scraping completed successfully." });
  } catch (err) {
    console.error("Scraping failed:", err.message);
    res.status(500).json({ error: "Scraping failed" });
  }
});

module.exports = router;
