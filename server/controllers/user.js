var passport = require('passport');

var User = require('../models/User');
var Course = require('../models/Course');

exports.getSignUp = function(req,res){
        res.render('signup');
    }

exports.postSignUp = function(req,res){
        var user = new User({profile:{name:req.body.name}, email:req.body.email, password:req.body.password})
            //Small issue here cant access profile.name
            user.save();
          Course.find(function(err,courses){
            res.render('index',{title:'Home', courseList:courses});
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
        res.redirect(req.session.returnTo ||'/dashboard');
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

