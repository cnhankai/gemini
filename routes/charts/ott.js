var express = require('express');
var router = express.Router();

/* GET assets home page. */
var getHomePage = function(req, res, next) {
    res.render('charts/ott/index', {
        title: 'OTT'
    });
};
router.get('/', getHomePage);

module.exports = router;
