var marked = require('marked'),
	env = require('./env');

var util = require('util');

module.exports = function(app, stark) {
	var recent = stark.site.recent.slice(0, 5);
	
	app.get('/', function(req, res, next){
		var domain = req.protocol + '://' + req.get('host'); 
		res.render('index', { recent: recent, title: stark.site.title, google: env.google, domain: domain });
	});

	app.get('/sitemap.xml', function(req, res, next){
		var domain = req.protocol + '://' + req.get('host'); 
		res.render('sitemap', { site: stark.site, domain: domain, lastMod: env.lastMod });
	});
};