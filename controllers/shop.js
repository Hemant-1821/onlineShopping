const Product = require('../models/product');

exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products =>{
        res.render('shop/product-list',{
            prod : products, 
            docTitle: 'All Products', 
            path:'/products'
        });
    });
    /*
    console.log('shop.js',adminData.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));*/
};

exports.getIndex = (req,res,next) => {
    Product.fetchAll(products =>{
        res.render('shop/index',{
            prod : products, 
            docTitle: 'Shop', 
            path:'/'
        });
    });
};

exports.getCart = (req,res,next) =>{
    res.render('shop/cart',
    {docTitle:'Your Cart',
    path:'/cart'
    });
};

exports.getOrders = (req,res,next) =>{
    res.render('shop/orders',
    {docTitle:'Your Orders',
    path:'/orders'
    });
};


exports.getCheckout = (req,res,next) => {
    res.render('shop/checkout',{
        path: '/checkout',
        docTitle: 'Checkout'
    });
};