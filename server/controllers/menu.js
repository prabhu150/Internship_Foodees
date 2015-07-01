var Menu = require('../models/Menu');

exports.getEditMenu = function(req,res){
    if(req.user)
        if(req.user.type=="admin")
            res.render('edit-menu', {title:'How we work'});
        else
            res.redirect('/');
    else
            res.redirect('/');
    }

// exports.postAddCourse = function(req,res){
//         if(req.body.featuredName)
//             var featured = true;
//         //Create a new course
//         var course = new Course ({name: req.body.courseName, featured:featured, published:req.body.date});
//         //The Magic!
//         course.save(function(err){
//                 Course.find(function(err,courses){
//             res.render('view-course',{courses:courses});
//         });
//         });

//     }

exports.getMenu = function(req,res){
        Course.find(function(err,courses){
            res.render('menu', {title:'Menu'});
        });

    }

// exports.postDeleteCourse = function(req,res){
//         Course.remove({ _id:req.params.id }, function (err) {
//             Course.find(function(err,courses){
//             res.render('view-course',{courses:courses});
//         });
//     });
// }