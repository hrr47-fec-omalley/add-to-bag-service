const Promise = require('bluebird');
const Product = require('./model/product');




function findProduct(id) {
  console.log("recieved the id for" + id);
  // let count
  // try{
  //   count = await Product.count(conditions);
  // }catch(err){
  //   console.log(`error fetching from database ${err}`)
  // }
  // return count;
  // return new Promise ( function (id) {
  //   console.log('from service :', Product);
  //   var result = Product.findById(id).exec();

  //   return result;
  // });
  return 5
};