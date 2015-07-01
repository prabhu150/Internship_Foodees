var Order = require('../models/Order');

exports.getOrderNow =  function(req,res){
            res.render('menu', {title:'Menu'});
}

exports.postOrderNow =  function(req,res){
            res.render('your-order', {title:'Your Order'});
}