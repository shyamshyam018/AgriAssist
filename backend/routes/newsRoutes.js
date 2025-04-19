const express = require("express");
const { getAllNews } = require("../controllers/newsController.js");
const router = express.Router();

router.get("/", getAllNews);

module.exports = router;
