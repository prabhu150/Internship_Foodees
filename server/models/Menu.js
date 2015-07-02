var mongoose= require('mongoose');

//A mongoose Schema
var menuSchema = new mongoose.Schema({
    course:
    {
name:{type:String , default:'' ,unique:true},
item:
{
	name:{type:String,unique:true},
	capacity:Number,
	itemtype:String,
	itemprice:Number
}},
    description: String,
    price: String,
    category: String
});

// Compile Schema into a mongoose Model
var Menu = mongoose.model('Menu',menuSchema);
module.exports = Menu;