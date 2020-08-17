const express = require('express');
const mongoose = require('mongoose');
const services = require('./services');
const path = require('path');

const Product = require('./model/product');
const env = require('dotenv').config();

const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));

// app.use('/products/:pid', express.static('public'));

const dbName = process.env.DB_NAME;

mongoose.connect('mongodb+srv://admin:admin@cluster0.mdtqx.mongodb.net/mykea?retryWrites=true&w=majority', err => {
  if (err) {
    console.log(err);
  }
}
);

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

const port = 5000;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});