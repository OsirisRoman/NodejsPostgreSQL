const express = require('express');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/add-product',
  });
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.productname });
  res.redirect('/');
});

module.exports = {
  router,
  products,
};
