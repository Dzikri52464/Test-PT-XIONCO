README.md untuk Proyek Chatbot Gemini
Chatbot Gemini (Node.js + Express + EJS)

Proyek chatbot sederhana yang terhubung ke **Gemini API** dari Google AI Studio. Dibangun menggunakan **Node.js**, **Express.js**, dan **EJS** sebagai templating engine.

Fitur

- Kirim prompt (pertanyaan) dan terima balasan dari AI Gemini
- UI sederhana berbasis EJS
- Cek koneksi API Gemini dengan endpoint `/status`

Teknologi yang Digunakan

- Node.js
- Express.js
- EJS
- dotenv
- Axios
- Gemini API (Google)

🗂️ Struktur Folder

chatbot-gemini/
├── views/
│ └── chat.ejs
├── .env
├── app.js
├── package.json
└── README.md

Cara Menjalankan

1. Clone repo ini** (jika belum):
cd chatbot-gemini
Install dependencies:
npm install
Buat file .env di root:

GEMINI_API_KEY=
Jalankan server:

node app.js
Akses di browser:

Chatbot: http://localhost:3000

Cek API: http://localhost:3000/status

Contoh Penggunaan
Masukkan pertanyaan seperti:

Apa itu enkripsi data?
Chatbot akan membalas dengan jawaban dari Gemini AI

Catatan
Pastikan API Key kamu aktif dan belum melebihi kuota

Bisa menggunakan model seperti gemini-1.5-pro, gemini-1.5-flash, dll.