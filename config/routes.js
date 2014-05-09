var marked = require('marked');

var util = require('util');

module.exports = function(app, stark) {
	app.get('/', function(req, res, next){

		var recent = stark.site.recent.slice(0, 5);
		var title = app.get('title');

		var md = marked('key', 'I am using __markdown__.');
		res.render('index', { recent: recent, title: title });
	});
};