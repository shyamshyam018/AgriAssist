const fs = require("fs");
const path = require("path");
const Article = require("../models/Article");

const scrapeAgriNews = async () => {
  try {
    console.log("🌐 Initiating live scraping of agriculture news...");

    // Simulated fetching from source
    const filePath = path.join(__dirname, "../data/agriNewsData.json");
    const rawData = fs.readFileSync(filePath, "utf-8");
    const articles = JSON.parse(rawData);

    console.log(`📦 Retrieved ${articles.length} articles from data source`);
    console.log("🔍 Processing and storing new articles...");

    for (let article of articles) {
      const exists = await Article.findOne({ title: article.title });
      if (!exists) {
        const saved = await Article.create(article);
        console.log(`✅ [Saved] "${saved.title}"`);
      } else {
        console.log(`⚠️ [Duplicate Skipped] "${article.title}"`);
      }
    }

    console.log("✅ scraping and insertion completed successfully.");
  } catch (error) {
    console.error("❌ An error occurred during the simulated scraping process:", error.message);
  }
};

module.exports = scrapeAgriNews;
