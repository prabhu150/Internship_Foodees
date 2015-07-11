var Menu = require('../models/Menu');
var Order = require('../models/Order');
var User = require('../models/User');


exports.getEditMenu = function(req,res){
    if(req.user)
        if(req.user.type=="admin")
            res.render('edit-menu', {title:'Edit Menu'});
        else
            res.redirect('/');
    else
            res.redirect('/');
    }

exports.postEditMenu = function(req,res){
        var menu = new Menu ({name: req.body.itemName, description: req.body.description, price: req.body.price, type: req.body.type, category: req.body.category});
        menu.save(function(err){
                Menu.find(function(err,menus){
                    res.render('menu',{menus:menus, title: 'Menu'});
                });
        });
}

exports.getMenu = function(req,res){

        Menu.find(function(err,menus){
            res.render('menu',{menus:menus, title: 'Menu'});
        });
    }

exports.postDeleteItem = function(req,res){
        Menu.remove({ _id:req.params.id }, function (err) {
            Menu.find(function(err,menus){
            res.render('menu',{menus:menus, title: 'Menu'});
        });
    });
}


exports.setupDefaultMenu =function(req,res)
{
	var menu = new Menu();
	var menus =[
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
	},
	{
	    "name" : "Pulao",
	    "description" : "Paneer",
	    "price" : "80",
	    "type" : "Gravy",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Thumbs Up/Sprite",
	    "description" : "Carbonated",
	    "price" : "50",
	    "type" : "Juices",
	    "category" : "Veg.",
	},
	{
	    "name" : "Redbull",
	    "description" : "Carbonated",
	    "price" : "100",
	    "type" : "Juices",
	    "category" : "Veg.",
	},
	{
	    "name" : "Lemon Clove/Mint/Ginger",
	    "description" : "Fresh Juice",
	    "price" : "20",
	    "type" : "Juices",
	    "category" : "Veg.",
	},
	{
	    "name" : "Carrot, Beet, Apple, Ginger & Lemon",
	    "description" : "Fresh Juice",
	    "price" : "100",
	    "type" : "Juices",
	    "category" : "Veg.",
	},
	{
	    "name" : "Mint, Cucumber, Carrot, Lemon & Chia Seeds",
	    "description" : "Fresh Juice",
	    "price" : "80",
	    "type" : "Juices",
	    "category" : "Veg.",
	},
	{
	    "name" : "Honey, Peanut Butter, Musli & Banana",
	    "description" : "Smoothies",
	    "price" : "100",
	    "type" : "Juices",
	    "category" : "Veg.",
	},
	{
	    "name" : "Chocolate/Strawberry & Musli",
	    "description" : "Smoothies",
	    "price" : "100",
	    "type" : "Juices",
	    "category" : "Veg.",
	},
	{
	    "name" : "Cheese",
	    "description" : "",
	    "price" : "20",
	    "type" : "Extras",
	    "category" : "Veg.",
	},
	{
	    "name" : "Chicken",
	    "description" : "",
	    "price" : "30",
	    "type" : "Extras",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Egg",
	    "description" : "",
	    "price" : "10",
	    "type" : "Extras",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Pork-Bacon",
	    "description" : "",
	    "price" : "50",
	    "type" : "Extras",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Sausages",
	    "description" : "",
	    "price" : "40",
	    "type" : "Extras",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Banana Foster Bread Pudding",
	    "description" : "Served with banana rum butter and cinnamon ice cream",
	    "price" : "150",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "Double Chocolate Smith Island Cake",
	    "description" : "10 layers of rich chocolate cake stacked between rich chocolate mousse rimmed with white chocolate shavings",
	    "price" : "310",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "Key Lime Cheesecake Shooters",
	    "description" : "3 layers dessert cup filled withzesty cheesecake, whipped cream and Graham Cracker crumbs",
	    "price" : "200",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "Cupcake",
	    "description" : "Ask your server about this week's special flavour!",
	    "price" : "100",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "Cobbler Rustica",
	    "description" : "Open face fruit cobbler served with vanilla bean ice cream and brown sugar crumble, fruit varies by availibility",
	    "price" : "280",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "Chocolate Peanut Butter Lava Cake",
	    "description" : "warm chocolate cake stuffed with a chocolate peanut butter ganache centre. Served with a scoop of vanilla bean ice cream",
	    "price" : "210",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "2 Scoop Sundae",
	    "description" : "Vanilla bean ice cream with chocolate sauce, whip cream and a cherry on top",
	    "price" : "120",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "Kids Scoop",
	    "description" : "Topped with chocolate sauce, whipped cream and sprinkles",
	    "price" : "100",
	    "type" : "Desserts",
	    "category" : "Veg.",
	},
	{
	    "name" : "Roti Canai",
	    "description" : "The original roti, crispy on the outside, fluffy on the inside-Savoury",
	    "price" : "20",
	    "type" : "Rotis",
	    "category" : "Veg.",
	},
	{
	    "name" : "Roti Telur",
	    "description" : "Classic egg roti-Savoury",
	    "price" : "30",
	    "type" : "Rotis",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Roti Bawang",
	    "description" : "With lashings of sweet red onions-Savoury",
	    "price" : "40",
	    "type" : "Rotis",
	    "category" : "Veg.",
	},
	{
	    "name" : "Roti Telur Bawang",
	    "description" : "Egg and onions, a must for omelette lovers-Savoury",
	    "price" : "40",
	    "type" : "Rotis",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Murtabak(Chicken/Lamb)",
	    "description" : "Local favourite, filled with spicy meat casserole-Savoury",
	    "price" : "60",
	    "type" : "Rotis",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Roti Pesang",
	    "description" : "Popular roti with freshly sliced bananas-Sweet",
	    "price" : "50",
	    "type" : "Rotis",
	    "category" : "Veg.",
	},
	{
	    "name" : "Roti Kaya",
	    "description" : "Filled with a traditional spread made from pandan and coconut-Sweet",
	    "price" : "45",
	    "type" : "Rotis",
	    "category" : "Veg.",
	},
	{
	    "name" : "Roti Bom",
	    "description" : "A truly indulgent roti served thicker, richer and sweeter-Sweet",
	    "price" : "55",
	    "type" : "Rotis",
	    "category" : "Veg.",
	},
	{
	    "name" : "Roti Tisu",
	    "description" : "Paper thin, extra crispy and served tall-Sweet",
	    "price" : "55",
	    "type" : "Rotis",
	    "category" : "Veg.",
	},
	{
	    "name" : "Nizami Biryani",
	    "description" : "Royal specialty from Hyderabad, long graun Basmati rice cooked with lamb or chicken, in a delicate blend of exotic spicesand toasted nuts and raisins",
	    "price" : "255",
	    "type" : "Rice",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Navratan Biryani",
	    "description" : "Basmati rice cooked with fresh vegetables, seasoned with herbs, toasted almonds, cashews and raisins-very aromatic!",
	    "price" : "235",
	    "type" : "Rice",
	    "category" : "Veg.",
	},
	{
	    "name" : "Shrimp Biryani",
	    "description" : "Saffron flavored Basmati rice cooked with extra large shrimp, seasoned with fresh ground spices and toasted nuts and raisins",
	    "price" : "300",
	    "type" : "Rice",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Brown Rice",
	    "description" : "",
	    "price" : "60",
	    "type" : "Rice",
	    "category" : "Veg.",
	},
	{
	    "name" : "Special Rang Biryani",
	    "description" : "Saffron flavored Basmati rice cooked with fresh vegetables, lamb, chicken and shrimp, seasoned with fresh ground spices and toasted nuts and raisins.",
	    "price" : "325",
	    "type" : "Rice",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Chicken Tikka Masala",
	    "description" : "",
	    "price" : "220",
	    "type" : "Gravy",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Paneer Tikka Masala",
	    "description" : "",
	    "price" : "200",
	    "type" : "Gravy",
	    "category" : "Veg.",
	},
	{
	    "name" : "Chicken Makhanwala",
	    "description" : "",
	    "price" : "245",
	    "type" : "Gravy",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Paneer Makhanwala",
	    "description" : "",
	    "price" : "225",
	    "type" : "Gravy",
	    "category" : "Veg.",
	},
	{
	    "name" : "Chicken Kadhai",
	    "description" : "",
	    "price" : "250",
	    "type" : "Gravy",
	    "category" : "Non-veg.",
	},
	{
	    "name" : "Paneer Kadhai",
	    "description" : "",
	    "price" : "230",
	    "type" : "Gravy",
	    "category" : "Veg.",
	},];

	menu.collection.insert(menus, onInsert);

	function onInsert(err, docs) {
	    if (err) {
	        // TODO: handle error
	    } else {
	        console.info('%d data were successfully stored.', docs.length);
	    }
	}
	res.redirect('/menu');

}





