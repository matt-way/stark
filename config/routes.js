var marked = require('marked');

module.exports = function(app, stark) {
	app.get('/', function(req, res, next){
		var md = marked('key', 'I am using __markdown__.');
		res.render('index', { content: md });
	});
};