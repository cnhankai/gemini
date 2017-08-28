var express = require('express');
var router = express.Router();

/* GET dtmb home page. */
router.get('/dtmb/', function(req, res, next) {
  res.render('index', { title: '首页' });
});

module.exports = router;
