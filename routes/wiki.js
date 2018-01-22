const express = require('express');
const router = express.Router();


router.get('/',(req,res,next)=>{
    res.render('wikipage');
}
);

router.post('/',(req,res,next)=>{
    res.send('Thanks for posting!');
}
);

router.get('/add',(req,res,next)=>{
     res.render('addpage');
    //res.send('is it working');
}
);

module.exports = router;













module.exports = router;