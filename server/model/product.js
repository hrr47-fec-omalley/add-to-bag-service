const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  label: {
    type: String,
  },
  rating: {
    type: Number,
  },
  images: [
    {
      name: {
        type: String,
      },
      imageUrl: {
        type: String,
      }
    }
  ],
  price: {
    type: Number,
  }
});


const product = mongoose.model('product', productSchema);
module.exports = product;