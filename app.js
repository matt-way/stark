
/**
 * Module dependencies.
 */

var express = require('express'),
	http = require('http'),
	path = require('path');

var app = express();

var util = require('util');

// all environments
app.set('title', process.env.ST_TITLE || 'Stark Blog');
app.set('port', process.env.PORT || 3000);
app.set('site', path.join(__dirname, 'site'));
app.set('views', path.join(__dirname, 'views'));
app.set('public', path.join(__dirname, 'public'));
app.engine("def", require("dot-emc").init({app: app, options: { templateSettings: { cache: app.get('env') != 'development' }}}).__express);
app.set('view engine', 'def');
app.use(express.favicon(path.join(app.get('public'), '/images/favicon.ico')));
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(app.get('public')));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// initialise stark (including content routes)
var stark = require('./config/stark').init(app);
// setup any additional routes
require('./config/routes')(app, stark);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Stark blog server listening on port ' + app.get('port'));
});	