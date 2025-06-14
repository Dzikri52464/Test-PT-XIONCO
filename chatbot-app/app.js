require('dotenv').config();
const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('chat', { response: null, prompt: null });
});

app.post('/chat', async (req, res) => {
  const prompt = req.body.prompt;
  const model = "gemini-2.0-flash"; // kamu bisa coba juga: gemini-1.5-flash, gemini-2.0-flash

  try {
    const result = await axios.post(
      `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        contents: [{ parts: [{ text: prompt }] }]
      }
    );

    const reply = result.data.candidates[0].content.parts[0].text;
    res.render('chat', { response: reply, prompt });
  } catch (error) {
    console.error("Gemini Error:", error.response?.data || error.message);
    const message = error.response?.data?.error?.message || error.message;
    res.render('chat', { response: `❌ Error: ${message}`, prompt });
  }
});
// app.get('/status', async (req, res) => {
//     try {
//       const response = await axios.get(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro?key=${process.env.GEMINI_API_KEY}`);
  
//       if (response.data && response.data.name) {
//         res.send("✅ Gemini API terhubung dan siap digunakan.");
//       } else {
//         res.send("⚠️ Gemini API tidak merespon dengan benar.");
//       }
//     } catch (error) {
//       const status = error.response?.status || 'Unknown';
//       const message = error.response?.data?.error?.message || error.message;
//       res.send(`❌ API Error [${status}]: ${message}`);
//     }
//   });
  

const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Chatbot Gemini jalan di http://localhost:${PORT}`));
