const mongoose = require('mongoose');

const produkSchema = new mongoose.Schema({
  nama: String,
  harga: Number
});

module.exports = mongoose.model('Produk', produkSchema);
