var express = require('express');
var router = express.Router();

// This retrieves the home page
router.get('/', function(req, res, next){
    res.render('about', {title: 'About'});
});

module.exports = router;
