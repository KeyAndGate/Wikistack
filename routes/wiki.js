const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.send('hello wikiStack!');
}
);

router.post('/',(req,res,next)=>{
    res.send('Thanks for posting!');
}
);

router.get('/add',(req,res,next)=>{
    res.render('addpage')
}
);













module.exports = router;