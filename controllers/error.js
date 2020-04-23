exports.notFound = (req,res,next)=>{
    res.render('404',{docTitle:'Page Not Found',path:'Error'});
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
};