 var mongoose= require('mongoose');
var User = require('./User');
var Menu = require('./Menu');
//A mongoose Schema
var orderSchema = new mongoose.Schema({
 u_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	m_id:[{type: mongoose.Schema.Types.ObjectId, ref: 'Menu'}],
    timestamp: { type: Number, default: (new Date()).getTime() }, 
	total: Number
 });

// Compile Schema into a mongoose Model
var Order = mongoose.model('Order',orderSchema);
module.exports = Order;	