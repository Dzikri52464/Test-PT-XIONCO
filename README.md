# Test-PT-XIONCO
1. Admin-app
   README.md – Admin Page
# Admin Page Pembelian (MongoDB + Node.js + Express + EJS)

Sebuah aplikasi admin sederhana untuk mencatat pembelian produk, melakukan pembatalan pembelian, serta menghapus data pembelian. Dibangun menggunakan Node.js, Express, MongoDB (Mongoose), dan EJS.

Fitur

Input pembelian produk
Cancel pembelian (ubah status jadi `dibatalkan`)
Delete pembelian (hapus permanen dari database)
Menampilkan total harga setiap pembelian
Menampilkan total penjualan keseluruhan

Teknologi

- Backend: Node.js + Express.js
- Database: MongoDB (Mongoose)
- Templating: EJS
- Styling: CSS bawaan (inline)


Struktur Proyek

admin-app-mongo/
├── app.js
├── .env
├── routes/
│ └── index.js
├── models/
│ ├── Produk.js
│ ├── Stok.js
│ └── Pembelian.js
├── views/
│ └── index.ejs
└── package.json

Cara Menjalankan

#Clone repositori & install dependensi
cd admin-app-mongo
npm install
# Siapkan file .env
Buat file .env di root folder:
MONGO_URI=mongodb://localhost:27017/db_toko
#Jalankan MongoDB
Pastikan MongoDB aktif (default port: 27017)

#Seed data awal (jalankan sekali saja)
node app.js
lalu buka di browser: http://localhost:3000/seed
#Jalankan aplikasi
node app.js
Akses di browser:
http://localhost:3000
Catatan
Pembelian yang di-cancel tidak dihitung dalam total penjualan.

Tombol delete akan menghapus data permanen dari database.

Seed hanya dijalankan sekali saja, atau untuk menambahkan barang jika tidak akan duplicate.

-------------------------------------------------------------------------------------------------------------------------------

2 Chat bot Ai
README.md
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

#Clone repo ini** (jika belum):
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




