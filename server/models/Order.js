 var mongoose= require('mongoose');
var User = require('./User');
var Menu = require('./Menu');
//A mongoose Schema
var orderSchema = new mongoose.Schema({
 u_id:{type: mongoose.Schema.Types.ObjectId, ref: 'User'},
	m_id:[{type: mongoose.Schema.Types.ObjectId, ref: 'Menu'}],
    timestamp: { type: Number, default: (new Date()).getTime() }, 
	total: Number,
	 address: {
    line1: { type: String, default: '' },
    line2: { type: String, default: '' },
    line3: { type: String, default: '' },
    line4: { type: String, default: '' },
    line5: { type: String, default: '' },
    line6: { type: String, default: '' },
    line7: { type: Number, default: '' },
},
 });

// Compile Schema into a mongoose Model
var Order = mongoose.model('Order',orderSchema);
module.exports = Order;	