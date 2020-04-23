const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
//const expressHbs = require('express-handlebars');

const app = express();

//app.engine('handlebars', expressHbs({defaultLayout:'main-layout', layoutsDir: "views/layouts/" }));
app.set('view engine', 'ejs');
//app.set('view engine', 'handlebars');
//app.set('view engine','pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminData.routes);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.render('404',{docTitle:'Page Not Found',path:'Error'});
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

//const server = http.createServer(app);
//server.listen(3000);  
app.listen(3000) //this can replace this both lines of code