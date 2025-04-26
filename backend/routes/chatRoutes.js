const express = require('express');
const router = express.Router();
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function getSystemPrompt() {
  const basePrompt = `
  You are Agri Intellect — a highly knowledgeable and concise agricultural assistant focused on Indian farming.

  Your expertise includes:
  - Traditional and modern farming techniques
  - Major crops, soil types, and seasonal patterns (Kharif, Rabi, Zaid)
  - Government policies, subsidies, and schemes
  - Market prices, irrigation, water and land management

  🔹 Reply in under 4 lines.
  🔹 Be extremely precise and only speak on agriculture or agriculture-related news and commerce.
  🔹 If a query is outside your scope, clearly state your limitation.
  🔹 Support replies with facts, data, or brief examples when relevant.
  🔹 Always respond in the same language as the user’s question.
  `;
  return basePrompt;
}


router.post('/chat', async (req, res) => {
  const { query } = req.body;


  if (!query) {
    return res.status(400).json({ error: "Query is required." });
  }

  try {
    const systemPrompt = getSystemPrompt();
    const prompt = `${systemPrompt}\n\nUser: ${query}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const response = result.response;



    const reply = await response.text();
    
    return res.status(200).json({
      response: reply,
      status: "success",
    });
  } catch (error) {
    console.error("Error calling Google Gemini API:", error);
    let errorMessage = "Failed to get response from the AI.";
    if (error.response && error.response.data && error.response.data.error) {
      errorMessage = `AI service error: ${error.response.data.error.message}`;
    } else if (error.message) {
      errorMessage = `Network or request error: ${error.message}`;
    }
    return res.status(500).json({ error: errorMessage, details: error.message });
  }
});

module.exports = router;
