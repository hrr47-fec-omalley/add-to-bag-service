const seeder = require('mongoose-seed');
const Product = require('./model/product');

const db = 'mongodb+srv://admin:admin@cluster0.mdtqx.mongodb.net/mykea?retryWrites=true&w=majority';

var sampleProduct = {
  'pid': 1,
  'name': 'FRIHETEN',
  'label': 'FRIHETEN',
  'rating': 4,
  'images': [
    {
      'name': 'blue cover',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/aleksandra-khoroshykh-f0vQ-o8XVjM-unsplash+copy+2.jpg'
    },
    {'name': 'Green cover',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/aleksandra-khoroshykh-f0vQ-o8XVjM-unsplash+copy+3.jpg'
    },
    {
      'name': 'Black cover',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/aleksandra-khoroshykh-f0vQ-o8XVjM-unsplash+copy.jpg'

    },
    {
      'name': 'Black & white',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/aleksandra-khoroshykh-f0vQ-o8XVjM-unsplash.jpg'
    }
  ],
  'price': 300,
};

const initProducts = () => {
  var data = [
    {
      'model': 'product',
      'documents': []
    }];

  for (let i = 0; i < 20; i++) {
    var product = {
      pid: sampleProduct.pid + i,
      name: sampleProduct.name + i,
      label: sampleProduct.label,
      images: sampleProduct.images,
      rating: sampleProduct.rating,
      price: sampleProduct.price
    };
    data[0].documents.push(product);
  }
  return data;
};

seeder.connect(db, function() {
  seeder.loadModels([
    './model/product.js'
  ]);
  seeder.clearModels(['product'], function() {
    var data = initProducts();
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });

});


module.exports = db;