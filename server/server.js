const express = require('express');
const mongoose = require('mongoose');
const services = require('./services');
const Product = require('./model/product');
const env = require('dotenv').config();

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const dbName = process.env.DB_NAME;
mongoose.connect(dbName, {useNewUrlParser: true}).catch(error => handleError(error));


app.get('/product/:pid', (req, res) => {
  let pid = req.params.pid;
  console.log('IDDDDddddd: ', pid.toString());
  Product.find(({ pid: pid}), function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

app.get('/', (req, res)=>{
  Product.find().then(data=>{
    res.json(data);
  });
});

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});