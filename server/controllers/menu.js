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





