const axios = require("axios");
const cheerio = require("cheerio");
const Article = require("../models/Article");

const scrapeAgriNews = async () => {
  try {
    const { data } = await axios.get("https://inshorts.com/en/read");
    const $ = cheerio.load(data);
    const articles = [];

    $("div.news-card").each((i, el) => {
      const title = $(el).find("span[itemprop='headline']").text().trim();
      const description = $(el).find("div[itemprop='articleBody']").text().trim();
      const imageUrl = $(el).find("div.news-card-image").attr("style");
      const sourceUrl = "https://inshorts.com/en/read";

      // Extract background image URL from style attribute
      const imageMatch = imageUrl?.match(/url\('(.*?)'\)/);
      const image = imageMatch ? imageMatch[1] : null;

      if (title && description && image) {
        articles.push({
          title,
          description,
          imageUrl: image,
          sourceUrl,
        });
      }
    });

    console.log(`📰 Found ${articles.length} articles`);

    for (let article of articles) {
      const exists = await Article.findOne({ title: article.title });
      if (!exists) {
        const saved = await Article.create(article);
        console.log("✅ Inserted:", saved.title);
      } else {
        console.log("⚠️ Skipped duplicate:", article.title);
      }
    }

    console.log("✅ Scraping completed.");
  } catch (error) {
    console.error("❌ Scraping failed:", error.message);
  }
};

module.exports = scrapeAgriNews;
