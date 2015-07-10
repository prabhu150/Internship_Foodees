//Include Node Modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);


//Require Models
var User = require('./server/models/User');
var Menu = require('./server/models/Menu');
var Order = require('./server/models/Order');
var passportConf=require('./server/config/passport');
var contactUs=require('./server/config/contact');

//Require Controllers
var userController = require('./server/controllers/user');
var menuController = require('./server/controllers/menu');
var orderController = require('./server/controllers/order');

var app =express();
// var multer     =       require('multer');
var done       =       false;


app.set('views', __dirname + '/server/views');
app.set('view engine','jade');

//app.use is used to use middlewares
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'Cooking codes with Foodees',
  store: new MongoStore({ url: 'mongodb://localhost/foodees', autoReconnect: true })
}));


// app.use(multer({ dest: './uploads/',
//  rename: function (fieldname, filename) {
//     return filename+Date.now();
//   },
// onFileUploadStart: function (file) {
//   console.log(file.originalname + ' is starting ...')
// },
// onFileUploadComplete: function (file) {
//   console.log(file.fieldname + ' uploaded to  ' + file.path)
//   done=true;
// }
// }));

// app.post('/api/photo',function(req,res){
//   if(done==true){
//     console.log(req.files);
//     res.end("File uploaded.");
//   }
// });

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req, res, next) {
  res.locals.user = req.user;
  res.locals.order = req.order;
  res.locals.menu = req.menu;
  next();
});

app.use(express.static('public')); //static route handling
app.use(bodyParser.json());//JSON encoding
app.use(bodyParser.urlencoded({extended:true}));//URL encoding


//Mongoose Connection with MongoDB
mongoose.connect('mongodb://localhost/foodees');
console.log('local mongodb opened');

//Routes
// GET ROUTES
app.get('/', userController.getIndex);
app.get('/about', userController.getAbout);
app.get('/menu', menuController.getMenu);
app.get('/working', userController.getWorking);
app.get('/editmenu', menuController.getEditMenu);
app.get('/signup', userController.getSignUp);
app.get('/signedup',userController.gotSignedUp)
app.get('/wrongemail',userController.wrongEmail);
app.get('/emailinuse',userController.emailUsed)
app.get('/signout', userController.getSignOut);
app.get('/dashboard',userController.getDashBoard);
app.get('/allorders', orderController.getAllOrders);
app.get('/delivery', orderController.getDelivery);
app.get('/contactus', contactUs.getContactUs);
app.get('/updatelocation', orderController.getUpdateLocation);
app.get('/setdefaultmenu',menuController.setupDefaultMenu);

//POST ROUTES
app.post('/editmenu', menuController.postEditMenu);
app.post('/deleteitem/:id', menuController.postDeleteItem);
app.post('/signup', userController.postSignUp);
app.post('/signin', userController.postSignIn);
app.post('/additem/:id', orderController.postAddItem);
app.post('/removeorder/:id', orderController.postRemoveItem);
app.post('/removecartorder/:id', orderController.postCartRemoveItem);
app.post('/vieworder', orderController.postViewOrder);
app.post('/delivery', orderController.postDelivery);
app.post('/contactus', contactUs.postContactUs);
app.post('/updatelocation', orderController.postUpdateLocation);


// FB LOGIN
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});
// GOOGLE LOGIN
app.get('/auth/google', passport.authenticate('google',  { scope:  ['profile' , 'email' , 'https://www.googleapis.com/auth/plus.login']}));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});

app.listen(3000);
console.log("Express server is listening at port 3000");