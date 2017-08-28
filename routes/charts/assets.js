var express = require('express');
var router = express.Router();

/* GET assets home page. */
var getHomePage = function(req, res, next) {
    res.render('charts/assets/index', {
        title: '媒资'
    });
};
router.get('/', getHomePage);

module.exports = router;
