  require('dotenv').config();
  const express = require('express');
  const mongoose = require('mongoose');
  const cors = require('cors');
  const newsRoutes = require('./routes/newsRoutes');
  const chatRoutes = require('./routes/chatRoutes'); 
  const app = express();
  // const cron = require("node-cron");
  const scrapeAgriNews = require("./scraper/scrapeAgriNews");


  app.use(cors({
    origin: 'http://localhost:3000', 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type'], 
  }));

  app.use(express.json());

  app.use('/api', newsRoutes);
  app.use('/api', chatRoutes);
  
  mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log("MongoDB Connected");
      app.listen(process.env.PORT || 5000, () => {
        console.log("Server running on port", process.env.PORT || 5000);
        console.log("Running news scraper...");
        scrapeAgriNews();
      });
    })
    .catch((err) => console.log(err));

   
