const express = require('express');
const router = express.Router();
const { fetchAsbisProducts } = require('../services/asbisFetcher');

router.get('/', async (req, res) => {
  try {
    const products = await fetchAsbisProducts();
    res.json(products);
  } catch (err) {
    console.error('Error in /api/products:', err.message);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

module.exports = router;