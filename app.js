var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var stylus = require('stylus');

var index = require('./routes/index');
var users = require('./routes/users');
var routes_charts_assets = require('./routes/charts/assets');
var routes_charts_dtmb = require('./routes/charts/dtmb');
var routes_charts_hybrid = require('./routes/charts/hybrid');
var routes_charts_iptv = require('./routes/charts/iptv');
var routes_charts_ott = require('./routes/charts/ott');
var routes_charts_user = require('./routes/charts/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'bower_components')));

app.use('/', index);
app.use('/users', users);
app.use('/charts/assets', routes_charts_assets);
app.use('/charts/dtmb', routes_charts_dtmb);
app.use('/charts/hybrid', routes_charts_hybrid);
app.use('/charts/iptv', routes_charts_iptv);
app.use('/charts/ott', routes_charts_ott);
app.use('/charts/user', routes_charts_user);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
