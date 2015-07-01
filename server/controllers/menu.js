var Menu = require('../models/Menu');

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
                Menu.find(function(err,menues){
                    res.render('Menu',{title: 'Menu'});
                });
        });
}

exports.getMenu = function(req,res){
            res.render('menu', {title:'Menu'});
    }

// exports.postDeleteCourse = function(req,res){
//         Course.remove({ _id:req.params.id }, function (err) {
//             Course.find(function(err,courses){
//             res.render('view-course',{courses:courses});
//         });
//     });
// }