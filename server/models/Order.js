var mongoose= require('mongoose');

//A mongoose Schema
var orderSchema = new mongoose.Schema({
    orders:
    {
      dateoforder:String,
      dateofdelivery:String,
      
      bill:Number
    }
});

// Compile Schema into a mongoose Model
var Order = mongoose.model('Order',orderSchema);
module.exports = Order;