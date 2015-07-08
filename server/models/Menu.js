var mongoose= require('mongoose');

//A mongoose Schema
var menuSchema = new mongoose.Schema({
    name: String,
	description: String,
	price: Number,
	type: String,
	category: String
 });

// Compile Schema into a mongoose Model
var Menu = mongoose.model('Menu',menuSchema);
module.exports = Menu;

