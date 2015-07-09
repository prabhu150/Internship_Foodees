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
exports.getDelivery = function(req,res){
	var username = req.user.profile.name;
	res.render('delivery',{title:'Delivery Details'});
}

exports.postDelivery = function(req,res){
  User.findByIdAndUpdate({_id:req.user},
    {$set:{profile:{address:{line1:req.body.line1,line2:req.body.line2,line3:req.body.line3,line4:req.body.line4,line5:req.body.line5,line6:req.body.line6,line7:req.body.line7}}}},
    {safe: true, upsert:true},function(err,users){
    	console.log('entered')});
    console.log('Ready');
}

exports.getUpdateLocation = function(req,res){
	User.find(function(err, users){
	  res.render('update-location',{users:users, title:'Update location'});
	});
}	

exports.postUpdateLocation = function(req,res){

	User.update({email:req.body.email},
		{tiffinstatus:req.body.location},
		{safe: true, upsert:true}, function(err,users){
		console.log(users);
		    	console.log('updated');
User.find(function(err,users){
 	res.render('update-location',{users:users, title:'Update location'});
});
   
    

    });
}



// User.findByIdAndUpdate({email:req.body.gemail},
//     	{$set:{profile:{location:req.body.location}}},
//     	{safe: true, upsert:true},function(err,users){
//     	console.log('updated');
// User.find(function(err,users){
//  	res.render('update-location',{users:users, title:'Update location'});
// });

