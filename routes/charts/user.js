var express = require('express');
var router = express.Router();

/* GET assets home page. */
var getHomePage = function(req, res, next) {
    res.render('charts/user/index', {
        title: '用户数据'
    });
};
router.get('/', getHomePage);

module.exports = router;
