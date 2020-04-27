const Product = require('../models/product');

exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product',
        {docTitle:'Add Product',
        path: '/admin/add-product',
    });
    //res.sendFile(path.join(rootDir,'views','add-product.html'));
}; 

exports.postAddProduct = (req,res,next)=>{
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,imageUrl,description,price);
    product.save();
    res.redirect('/');
};

exports.getProducts = (req,res,next)=>{
    Product.fetchAll(products =>{
        res.render('admin/products',{
            prod : products, 
            docTitle: 'Admin Products', 
            path:'/admin/products'
        });
    });
    /*
    console.log('shop.js',adminData.products);
    res.sendFile(path.join(rootDir,'views','shop.html'));*/
};