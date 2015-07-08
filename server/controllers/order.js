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
exports.postRemoveItem =  function(req,res){
Order.remove({m_id:req.params.id,u_id:req.user.id},function(err,order) // finds order by the menu item and user id 
{
	// doubt as to why findbyidandremove doesnt work
	// issue when user orders multiple rotis as the .remove removes all orders
	//solution is to findoneandremove instead of order.remove but we need to figure out the syntax for the same
	    	Menu.find(function(err,menus){
                    res.render('menu',{menus:menus, title: 'Menu'});
                });

});
}


exports.postCartRemoveItem =  function(req,res){
Order.remove({_id:req.params.id,u_id:req.user.id},function(err,order) // finds order by the menu item and user id 
{
	    	Order.find().populate('m_id').exec(function(err, orders) {
		res.render('my-order',{orders:orders, title:'My Orders'});
	});

});
}




exports.postViewOrder = function(req,res){
	User.find(function(err, users){
	  res.render('my-order',{orders:users, title:'My Orders'});
	});
}

exports.getAllOrders = function (req,res){
	Order.find().populate('m_id').exec(function(err, orders) {
		res.render('my-order',{orders:orders, title:'My Orders'});
	});
}

