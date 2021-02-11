const Product = require('../models/product');

const getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
    });
}

const postAddProduct = (req, res) => {
    const product = new Product(req.body.productname)
    product.save();
    res.redirect('/');
}

const getEditProduct = (req, res, next) => {
    res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
    });
}

const getProductList = (req, res, next) => {
    Product.fetchAll( products => {
        res.render('admin/product-list', {
          prods: products,
          pageTitle: 'Product List',
          path: '/admin/product-list',
        });
    });
}

module.exports = {
    getAddProduct,
    postAddProduct,
    getEditProduct,
    getProductList
}