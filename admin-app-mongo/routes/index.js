const express = require('express');
const router = express.Router();
const Produk = require('../models/Produk');
const Stok = require('../models/Stok');
const Pembelian = require('../models/Pembelian');

// Dummy data setup (run once if belum ada produk)
router.get('/seed', async (req, res) => {
  const data = [
    { nama: 'Meja Kayu', harga: 500000 },
    { nama: 'Kursi Rotan', harga: 250000 },
    { nama: 'Lemari 3 Pintu', harga: 1500000 },
    { nama: 'Rak Buku', harga: 350000 },
    { nama: 'Bangku Pendek', harga: 150000 },
    { nama: 'Lemari Pajangan', harga: 950000 },
    { nama: 'Meja TV', harga: 600000 },
    { nama: 'Rak Sepatu', harga: 275000 },
    { nama: 'Kursi Makan', harga: 225000 },
    { nama: 'Meja Belajar', harga: 450000 },
    { nama: 'Meja Tenis', harga: 550000 },
  ];

  const created = await Produk.insertMany(data);
  for (let p of created) {
    await Stok.create({ id_produk: p._id, jumlah: 10 });
  }

  res.send('Data produk & stok berhasil di-seed');
});

router.get('/', async (req, res) => {
    const produk = await Produk.find();
    const pembelian = await Pembelian.find().populate('id_produk');
  
    // Hitung total penjualan (hanya yang status = 'dibeli')
    const totalPenjualan = pembelian.reduce((total, p) => {
      if (p.status === 'dibeli' && p.id_produk && p.id_produk.harga) {
        return total + (p.jumlah * p.id_produk.harga);
      }
      return total;
    }, 0);
  
    res.render('index', { produk, pembelian, totalPenjualan });
  });
  

router.post('/beli', async (req, res) => {
  const { id_produk, jumlah } = req.body;

  await Pembelian.create({ id_produk, jumlah });

  await Stok.updateOne({ id_produk }, { $inc: { jumlah: -jumlah } });

  res.redirect('/');
});

router.post('/cancel/:id', async (req, res) => {
  const pembelian = await Pembelian.findById(req.params.id);
  pembelian.status = 'dibatalkan';
  await pembelian.save();

  await Stok.updateOne({ id_produk: pembelian.id_produk }, { $inc: { jumlah: pembelian.jumlah } });

  res.redirect('/');
});
// Hapus pembelian secara permanen
router.post('/delete/:id', async (req, res) => {
    await Pembelian.findByIdAndDelete(req.params.id);
    res.redirect('/');
  });
  
module.exports = router;
