var passport = require('passport');
var Menu = require('../models/Menu');
var User = require('../models/User');
var Order = require('../models/Order');

exports.getIndex =  function(req,res){
            res.render('index', {title:'Home'});
}

exports.getAbout =  function(req,res){
            res.render('about', {title:'About'});
}

exports.getWorking =  function(req,res){
            res.render('working.jade', {title:'How we work'});
}

exports.getSignUp = function(req,res){
        res.render('signup', {title:'Sign up'});
}

exports.postSignUp = function(req,res){
        var user = new User({profile:{name:req.body.name, gender:req.body.sex}, email:req.body.email, password:req.body.password, agreed:req.body.agree})
        user.save();
        User.find(function(err, users){
          res.render('signedup',{title:'Home'});
        });
}
exports.wrongEmail =function(req,res){
res.render('wrongemail');
}
exports.emailUsed=function(req,res)
{
  res.render('emailinuse');
}
exports.postSignIn = function(req,res, next){
    passport.authenticate('local',function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        console.log(user);
        console.log('Email ID doesnt Match!');
        return res.redirect('/wrongemail');
      }
      req.logIn(user, function(err) {
        if (err) {
        console.log(err);
          return res.redirect('/emailinuse');
        }
        console.log('Success! You are logged in.');
        res.redirect(req.session.returnTo ||'/');
      });
    })(req, res, next);
}
exports.gotSignedUp = function(req,res){

  res.redirect('/signedup');
}

exports.getSignOut = function(req,res, next){
  req.logout();
  res.redirect('/');
}

exports.getDashboard = function(req,res){
    res.render('dashboard',{title:'Dashboard'});
}
exports.postDelivery = function(req,res){
   var user = new User({profile:{address:{line1:req.body.line1,line2:req.body.line2,line3:req.body.line3,line4:req.body.line4,line5:req.body.line5,line6:req.body.line6,line7:req.body.line7}}});
    user.save();
    res.redirect('/menu');
}