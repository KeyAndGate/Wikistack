const express = require('express');
const router = express.Router();
var models = require('../models');
var Page = models.Page; 
var User = models.User; 

router.get('/',(req,res,next)=>{
    res.redirect('/');
}
);

// router.post('/', (req,res,next)=>{
//     res.json(req.body);
// });


router.post('/', function(req, res, next) {

    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`

    var page = Page.build({
        title: req.body.title,
        content: req.body.content,
        // status: req.body.status
        // urlTitle: urlTitleMaker(req.body.title)
    });

    // STUDENT ASSIGNMENT:
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise or it can take a callback.
    page.save().then(res.json(page));
    // -> after save -> res.redirect('/');
});


router.get('/add',(req,res,next)=>{
     res.render('addpage');
    //res.send('is it working');
});

router.get('/:uTitle',(req,res,next)=>{
   let promisePage = Page.findAll({
        where: {titleUrl : req.params.uTitle}
    });
    promisePage.then(
       x=> res.json(x)
    ).catch(next);
    
    
});













module.exports = router;
