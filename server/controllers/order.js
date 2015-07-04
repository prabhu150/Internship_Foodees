var Order = require('../models/Order');
var Menu = require('../models/Menu');
var User = require('../models/User');

exports.postAddItem =  function(req,res){
		var order = new Order();
	    order.m_id=req.params.id;
	    order.u_id=req.user.id;
	    order.save(function(err, order){
	    	res.redirect('/menu');
	    });
		

	    
    
}

exports.postViewOrder = function(req,res){
	User.find(function(err, users){
	  res.render('my-order',{users:users, title:'My Orders'});
	});
}

exports.getAllOrders = function (req,res){
	Order.find().populate('m_id').exec(function(err, order) {
		res.send(order);

	});
}

// exports.postRemoveItem =  function(req,res){
//             Order.remove({ _id:req.params.id }, function (err) {
//                                 Menu.find(function(err,menus){
//                                 res.render('menu',{menus:menus, title: 'Menu'});
//                             });
//                         });
// }

