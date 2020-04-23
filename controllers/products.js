const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('add-product',
        {docTitle:'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
};

exports.postAddProduct = (req,res,next)=>{
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products =>{
        res.render('shop',{
            prod : products, 
            docTitle: 'Shop', 
            path:'/', 
            activeShop: true,
            productCSS: true
        });
    });
    /*
    console.log('shop.js',adminData.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));*/
};