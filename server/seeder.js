const seeder = require('mongoose-seed');


const db = 'mongodb+srv://admin:admin@cluster0.mdtqx.mongodb.net/mykea?retryWrites=true&w=majority';

var data = [
  {
    'model': 'product',
    'documents':[{
      'name': 'FRIHETEN',
      'label': 'FRIHETEN',
      'rating': 4,
      images: [
        {
          name: 'blue cover',
          imageUrl: 'https://fecproductimages.s3-us-west-1.amazonaws.com/aleksandra-khoroshykh-f0vQ-o8XVjM-unsplash+copy+2.jpg'
        }
      ],
      price: 300
    }]
  }];

seeder.connect(db, function() {
  seeder.loadModels([
    './server/model/product.js'
  ]);
  seeder.clearModels(['product'], function() {
    seeder.populateModels(data, function() {
      seeder.disconnect();
    });
  });

});


