var mongoose= require('mongoose');

//A mongoose Schema
var orderSchema = new mongoose.Schema({
    name: String,
    featured: Boolean,
    published: Date
});

// Compile Schema into a mongoose Model
var Order = mongoose.model('Order',orderSchema);
module.exports = Order;