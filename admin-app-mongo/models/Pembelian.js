const mongoose = require('mongoose');

const pembelianSchema = new mongoose.Schema({
  id_produk: { type: mongoose.Schema.Types.ObjectId, ref: 'Produk' },
  jumlah: Number,
  status: { type: String, enum: ['dibeli', 'dibatalkan'], default: 'dibeli' },
  tanggal: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Pembelian', pembelianSchema);
