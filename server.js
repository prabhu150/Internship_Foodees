//Include Node Modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

//Require Models
var User = require('./server/models/User');
var Course = require('./server/models/Course');
var passportConf=require('./server/config/passport');

//Require Controllers
var userController = require('./server/controllers/user');
//var courseController = require('./server/controllers/course');
var homeController = require('./server/controllers/home');

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
app.get('/', function(req,res){
        Course.find(function(err,courses){
            res.render('index', {title:'Home'});
        });
});
// app.get('/addcourse', courseController.getAddCourse);
// app.post('/addcourse', courseController.postAddCourse);
// app.get('/viewcourses', courseController.getViewCourses);
// app.post('/deletecourse/:id', courseController.postDeleteCourse);
// app.get('/signup', userController.getSignUp);
// app.post('/signup', userController.postSignUp);
// app.post('/signin', userController.postSignIn);
// app.get('/signout', userController.getSignOut);

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});

// app.get('/dashboard',userController.getDashboard);

//req=request =>HTTP REQUEST object
//res=response =>HTTP RESPONSE object
 
app.listen(8085);
console.log("Express server is listening at port 8085");