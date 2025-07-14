const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const moodMap = {
  happy: "🙂",
  joy: "🙂",
  cheerful: "🙂",
  sad: "😔",
  stressed: "😔",
  tired: "😔",
  depressed: "😔",
  angry: "😡",
  mad: "😡",
  frustrated: "😡",
  neutral: "🙂", // fallback to 🙂
};

async function classifyMood(text) {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `
Classify the user's journal entry into one of the following moods:
Happy, Sad, Stressed, Angry, Neutral.
Return only the mood as one word.
Entry:
"""${text}"""
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const moodText = response.text().trim().toLowerCase();

  // Map mood → emoji
  return moodMap[moodText] || "🙂";
}

module.exports = classifyMood;
