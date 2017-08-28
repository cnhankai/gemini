var express = require('express');
var router = express.Router();

/* GET hybrid home page. */
router.get('/hybrid/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

module.exports = router;
