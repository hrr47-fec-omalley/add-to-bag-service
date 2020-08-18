/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const services = require('./services');

const Product = require('./model/product');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../public`));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// app.use('/products/:pid', express.static('public'));

// const dbName = process.env.DB_NAME;

mongoose.connect('mongodb+srv://admin:admin@cluster0.mdtqx.mongodb.net/mykea?retryWrites=true&w=majority', (err) => {
  if (err) {
    console.log(err);
  }
});

app.get('/product/:pid', (req, res) => {
  const { pid } = req.params;
  console.log('IDDDDddddd: ', pid.toString());
  Product.find(({ pid }), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});
app.get('/', (req, res) => {
  const { pid } = req.params;
  console.log('IDDDDddddd: ', pid.toString());
  Product.find(({ pid }), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

const port = 3003;

app.listen(port, () => {
  console.log(`Connected to server on port ${port}`);
});
