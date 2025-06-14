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

1. Clone repositori & install dependensi
cd admin-app-mongo
npm install
2. Siapkan file .env
Buat file .env di root folder:
MONGO_URI=mongodb://localhost:27017/db_toko
3. Jalankan MongoDB
Pastikan MongoDB aktif (default port: 27017)

4. Seed data awal (jalankan sekali saja)
node app.js
lalu buka di browser: http://localhost:3000/seed
5. Jalankan aplikasi
node app.js
Akses di browser:
http://localhost:3000
Catatan
Pembelian yang di-cancel tidak dihitung dalam total penjualan.

Tombol delete akan menghapus data permanen dari database.

Seed hanya dijalankan sekali saja, jika tidak akan duplicate.

