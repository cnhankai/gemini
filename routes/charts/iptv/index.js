var express = require('express');
var router = express.Router();

/* GET iptv home page. */
router.get('/iptv/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

module.exports = router;
