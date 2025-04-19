require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const newsRoutes = require('./routes/newsRoutes.js');

const app = express();
const cron = require("node-cron");
const scrapeAgriNews = require("./scraper/scrapeAgriNews.js");


app.use(cors());
app.use(express.json());




app.use('/api/news',newsRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 5000, () => {
      console.log("Server running on port", process.env.PORT || 5000);
    });
  })
.catch((err) => console.log(err));




cron.schedule("0 * * * *", () => {
  console.log("Running news scraper...");
  scrapeAgriNews();
});
