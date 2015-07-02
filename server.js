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

//Require Controllers
var userController = require('./server/controllers/user');
var menuController = require('./server/controllers/menu');
var orderController = require('./server/controllers/order');

var app =express();

app.set('views', __dirname + '/server/views');
app.set('view engine','jade');

//app.use is used to use middlewares
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: 'Cooking codes with Foodees',
  store: new MongoStore({ url: 'mongodb://localhost/foodees', autoReconnect: true })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use(express.static('public')); //static route handling
app.use(bodyParser.json());// assuming POST: {"name":"foo","color":"red"} <-- JSON encoding
app.use(bodyParser.urlencoded({extended:true}));// assuming POST: name=foo&color=red <-- URL encoding

//Mongoose Connection with MongoDB
mongoose.connect('mongodb://localhost/foodees');
console.log('local mongodb opened');

//Routes
app.get('/', userController.getIndex);
app.get('/about', userController.getAbout);
app.get('/working', userController.getWorking);
app.get('/editmenu', menuController.getEditMenu);
app.post('/editmenu', menuController.postEditMenu);
app.get('/menu', menuController.getMenu);
app.get('/ordernow', orderController.getOrderNow);
app.post('/ordernow', orderController.postOrderNow);
app.get('/signup', userController.getSignUp);
app.post('/signup', userController.postSignUp);
app.post('/signin', userController.postSignIn);
app.get('/signout', userController.getSignOut);

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});

// <<<<<<< HEAD
// app.get('/auth/google',
//   passport.authenticate('google',  { scope:  ['profile' , 'email' , 'https://www.googleapis.com/auth/plus.login']}));

// app.get('/auth/google/callback', 
//   passport.authenticate('google', { failureRedirect: '/' }),
//   function(req, res) {
// res.redirect(req.session.returnTo || '/');
//   });

// app.get('/auth/twitter',
//   passport.authenticate('twitter'));

// app.get('/auth/twitter/callback', 
//   passport.authenticate('twitter', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });



// =======
app.get('/auth/google', passport.authenticate('google',  { scope:  ['profile' , 'email' , 'https://www.googleapis.com/auth/plus.login']}));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), function(req, res) {
res.redirect(req.session.returnTo || '/');
  });

// >>>>>>> 745ef1410231d45f97b1d55d24d72dc82b496f6d
app.listen(3000);
console.log("Express server is listening at port 3000");