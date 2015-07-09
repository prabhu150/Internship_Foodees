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

var defaultMenu =[
{
    "name" : "Aloo Vada",
    "description" : "Street Side Snack",
    "price" : "30",
    "type" : "Rice",
    "category" : "Veg.",
    
},
{
    "name" : "Paneer Lajavab",
    "description" : "Paneer",
    "price" : "80",
    "type" : "Gravy",
    "category" : "Non-veg.",
}
] // how to add this inside menu such that admin can edit it...inside mongodb how to put ?
