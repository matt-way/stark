
var fs = require('fs'),
	path = require('path'),
	_ = require('underscore'),
	marked = require('marked'),
	jsonfm = require('json-front-matter');

var util = require('util');

var shortId = require('shortid');
// seed id generator with constant secret
shortId.seed(8992);

// init marked settings
marked.setOptions({ gfm: true, breaks: true });
  
var previewStop = '<!-- preview -->';

// Stark primary object
function Stark() {
	this.site = {};
	this.defaultView = 'pages';	
}

// called on app start to load the blog system
Stark.prototype.init = function(app, done) {
	// recursively go through the site folder, building the site hierarchy
	// pass in updating parameters
	this.processFolder(app, app.get('site'), this.defaultView, '', this.site);
	return this;	
};

// build process for site content folder
// has lots of params because they get updated during recursion
// app, current path, current view, current uri, current object result branch
Stark.prototype.processFolder = function(app, dir, view, uri, branch) {
	var self = this;

	var list = fs.readdirSync(dir);
	_.each(list, function(file){
		var fullpath = path.join(dir, file);		
		var stats = fs.statSync(fullpath);		

		if(stats && stats.isDirectory()){	
			// if this is a base folder, set the view to this type
			// NOTE: in the future the view selection could be made more complex
			var curView = (uri.length > 0) ? view : file;			
			branch[file] = {};
			self.processFolder(app, fullpath, curView, uri + '/' + file, branch[file]);
		}else{			
			// init the file values
			var filename = file.split('.')[0];
			branch[filename] = {
				uri: uri + '/' + filename,
				view: view,
				filepath: fullpath
			};
			// parse the file
			self.processFile(app, filename, branch[filename]);
		}
	});
};

// parses the given file, putting the results into the current branch
Stark.prototype.processFile = function(app, name, branch) {
	var self = this;

	// give the file an id
	branch.id = shortId.generate();

	// setup the route for the file
	app.get(branch.uri, function(req, res, next){
		self.getContent(branch, function(err, item){
			if(err) { return next('Item exists, but could not be loaded: ' + err); }

			console.log(util.inspect(item, false, null));
			res.render(branch.view, { site: self.site, item: item });
		});		
	});
};

// called by route to retrieve content, loading and parsing if it hasn't already been placed into cache
Stark.prototype.getContent = function(item, done) {
	// if the content has already been loaded ignore
	if(item.content){
		return done(null, item);
	}
	// load the file
	fs.readFile(item.filepath, 'utf-8', function(err, data){
		if(err) { return done(err); }

		var parsed = jsonfm.parse(data);

		// build the preview and full text		
		var prevText = parsed.body;
		if(~parsed.body.indexOf(previewStop)){
			prevText = prevText.split(previewStop)[0];
		}else if(parsed.attributes.previewLength){
			prevText = prevText.substr(0, parsed.attributes.previewLength);
		}

		item.content = {
			meta: parsed.attributes,			
			body: marked(parsed.body),
			preview: marked(prevText)
		};

		done(null, item);
	});
};

Stark.prototype.getSite = function() {
	return this.site;
};

module.exports = new Stark();