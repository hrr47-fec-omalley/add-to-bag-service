const seeder = require('mongoose-seed');
const Product = require('../server/model/product.js');

const db = 'mongodb+srv://admin:admin@cluster0.mdtqx.mongodb.net/mykea?retryWrites=true&w=majority';

var sampleProduct = {
  'pid': 1,
  'name': 'FRIHETEN',
  'label': 'cover',
  'rating': 4,
  'images': [
    {
      'name': 'blue cover',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-12+at+7.12.27+PM.png'
    },
    {'name': 'Green cover',
      'imageUrl':'https://fecproductimages.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-12+at+7.12.58+PM.png'
    },
    {
      'name': 'Black cover',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-12+at+7.13.03+PM.png'

    },
    {
      'name': 'Black & white',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-12+at+7.13.11+PM.png'
    }
  ],
  'price': 300,
};

var sampleProduct2 = {
  'pid': 2,
  'name': 'HOLMSUND',
  'label': 'cover',
  'rating': 4,
  'images': [
    {
      'name': 'blue cover',
      'imageUrl': 'https://fecproductimages.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-12+at+7.12.27+PM.png'
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
  'price': 500,
};

var productArr = [sampleProduct2, sampleProduct];


const initProducts = () => {
  var data = [
    {
      'model': 'product',
      'documents': []
    }];

  for (let j = 0; j < productArr.length; j++) {
    for (let i = 0; i < 100; i++) {
      var product = {
        pid: i,
        name: sampleProduct.name + i,
        label: sampleProduct.label,
        images: sampleProduct.images,
        rating: sampleProduct.rating,
        price: sampleProduct.price
      };
      data[0].documents.push(product);
    }
  }
  return data;
};


seeder.connect(db, function() {
  seeder.loadModels([
    './server/model/product.js'
  ]);
  seeder.clearModels(['product'], function() {
    var data = initProducts();
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });

});

module.exports = db;