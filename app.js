const express = require('express');
const product = require('./product');

const app = express();

app.get('/products', async (req, res) => {
  try {
    const products = await product.find({}, 'name price');
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
