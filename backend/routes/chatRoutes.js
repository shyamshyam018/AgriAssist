const express = require('express');
const router = express.Router();
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function getSystemPrompt() {
  const basePrompt = `
  You are an expert in Indian agriculture with deep knowledge of:
  - Traditional and modern farming practices across different regions
  - Major crops and their cultivation patterns
  - Agricultural policies and government initiatives
  - Challenges faced by Indian farmers
  - Sustainable farming practices in the Indian context
  - Agricultural seasons (Kharif, Rabi, Zaid)
  - Irrigation systems and water management
  - Soil types and crop suitability

  If a question falls outside these topics, kindly explain that the assistant can only provide information related to agriculture and its commerce
  but can respond to any news that somehow is related to agriculture
  you can also give prices related information and statistics without any limit
  the response should be very preicise and concise and on-point , as you are supposed to reply like a chatbot in agri webiste
  Respond based on the language of the user’s query.
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
