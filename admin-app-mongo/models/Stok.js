const mongoose = require('mongoose');

const stokSchema = new mongoose.Schema({
  id_produk: { type: mongoose.Schema.Types.ObjectId, ref: 'Produk' },
  jumlah: Number
});

module.exports = mongoose.model('Stok', stokSchema);
