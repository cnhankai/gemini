var express = require('express');
var router = express.Router();

/* GET assets home page. */
var getHomePage = function(req, res, next) {
    res.render('charts/hybrid/index', {
        title: 'DTMB+OTT'
    });
};
router.get('/', getHomePage);

module.exports = router;
