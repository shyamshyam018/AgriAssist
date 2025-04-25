const express = require('express');
const router = express.Router();
require('dotenv').config();
const { GoogleGenerativeAI } = require("@google-ai/generativelanguage");

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
const languages = {
  en: 'English',
  hi: 'Hindi',
  gu: 'Gujarati',
  ma: 'Marathi',
  ta: 'Tamil'
};

function getSystemPrompt(lang = 'en') {
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

Only provide information related to Indian agriculture. If a question is outside this domain,
politely redirect the conversation to Indian agriculture topics.

Example exchanges:
Q: What crops are grown in Punjab?
A: Punjab is known as India's breadbasket, primarily growing:
- Wheat (during Rabi season)
- Rice (during Kharif season)
- Cotton
- Sugarcane

Q: How is cryptocurrency doing?
A: I specialize in Indian agriculture topics. Instead, I can tell you about how digital
payment systems are transforming Indian agriculture through initiatives like e-NAM.

Respond only in ${languages[lang] || 'English'}.
`;
  return basePrompt;
}

router.post('/api/chat', async (req, res) => {
  const { query, language = 'en' } = req.body;

  if (!query) {
    return res.status(400).json({ error: "Query is required." });
  }

  if (!languages[language]) {
    return res.status(400).json({ error: `Unsupported language. Please choose from: ${Object.keys(languages).join(', ')}` });
  }

  try {
    const systemPrompt = getSystemPrompt(language);
    const prompt = `${systemPrompt}\n\nUser: ${query}\nAssistant:`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const reply = response.text();

    return res.status(200).json({
      response: reply,
      language: languages[language],
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