var passport = require('passport');

var User = require('../models/User');

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
        var user = new User({profile:{name:req.body.name,gender:req.body.sex.value,preference:req.body.prefer.value}, email:req.body.email, password:req.body.password})
        user.save();
        Course.find(function(err,courses){
          res.render('index',{title:'Home'});
        });
}

exports.postSignIn = function(req,res, next){
    passport.authenticate('local',function(err, user, info) {
      if (err) return next(err);
      if (!user) {
        console.log('errors');
        return res.redirect('/');
      }
      req.logIn(user, function(err) {
        if (err) return next(err);
        console.log('Success! You are logged in.');
        res.redirect(req.session.returnTo ||'/');
      });
    })(req, res, next);
}

exports.getSignOut = function(req,res, next){
  req.logout();
  res.redirect('/');
}

exports.getDashboard = function(req,res){
    res.render('dashboard',{title:'Dashboard'});
}

