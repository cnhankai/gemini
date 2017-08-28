var express = require('express');
var router = express.Router();

/* GET assets home page. */
router.get('/assets/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

module.exports = router;
