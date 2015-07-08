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

exports.postViewOrder = function(req,res){
	User.find(function(err, users){
	  res.render('my-order',{users:users, title:'My Orders'});
	});
}

exports.getAllOrders = function (req,res){
	Order.find().populate('m_id').exec(function(err, order) {
		res.render('my-order',{order:order});

	});
}
exports.getDelivery = function(req,res){
	var username = req.user.profile.name;
	res.render('delivery',{title:'Delivery Details'});
}

exports.postDelivery = function(req,res)
{
  User.findByIdAndUpdate({_id:req.user},
    {$set:{profile:{address:{line1:req.body.line1,line2:req.body.line2,line3:req.body.line3,line4:req.body.line4,line5:req.body.line5,line6:req.body.line6,line7:req.body.line7}}}},
    {safe: true, upsert:true},function(err,users){
    	console.log('entered')});
    // user.save();
    // User.find(function(err, users){
    //       res.render('delivery',{users:users});
    //     });
    console.log('Ready');
}