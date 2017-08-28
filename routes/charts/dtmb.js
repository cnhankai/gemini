var express = require('express');
var router = express.Router();

/* GET assets home page. */
var getHomePage = function(req, res, next) {
    res.render('charts/dtmb/index', {
        title: 'DTMB'
    });
};
router.get('/', getHomePage);

module.exports = router;
