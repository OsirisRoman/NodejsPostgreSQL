const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/add-product',
    });
}

exports.postAddProduct = (req, res) => {
    const product = new Product(req.body.productname)
    product.save();
    res.redirect('/');
}

exports.getAllProducts = (req, res, next) => {
    const products = Product.fetchAll( products => {
        res.render('shop', {
          prods: products,
          pageTitle: 'Shop',
          path: '/',
        });
    });
}