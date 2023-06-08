const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const product = mongoose.model('product', productSchema);

module.exports = product;
