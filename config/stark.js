
var fs = require('fs'),
	path = require('path'),
	_ = require('underscore'),
	marked = require('marked'),
	jsonfm = require('json-front-matter');

var util = require('util');

var shortId = require('shortid');

// init marked settings
marked.setOptions({ gfm: true, breaks: true });
// the code for the preview stop
var previewStop = '<!-- preview -->';

// the number of items to collect for categorically related list
var relatedN = 5;

// Stark primary object
function Stark() {
	this.site = {
		items: {},
		recent: []
	};
	this.defaultView = 'posts';	
}

// called on app start to load the blog system
// This is completed in sync, as all files need to be loaded to take care
// of post loading requirements like building recent and related lists
Stark.prototype.init = function(app, done) {
	var self = this;
	// recursively go through the site folder, building the site hierarchy
	// pass in updating parameters
	this.processFolder(app, app.get('site'), this.defaultView, '', this.site.items);
	// sort the recent list by the date descending
	_.sortBy(this.site.recent, function(item){
		return item.meta.date;
	});
	this.site.recent.reverse();
	// use the recent list to build the previous/next refs, and the related list for each post
	_.each(this.site.recent, function(item, index, list){
		if(index > 0){
			list[index - 1].next = item;
			item.previous = list[index - 1];			
		}
		self.buildRelated(item);
	});
	
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
			var uriPiece = uri + '/' + file;		
			branch[file] = { 
				parent: branch, 
				category: uriPiece 
			};
			self.processFolder(app, fullpath, curView, uriPiece, branch[file]);
		}else{			
			// init the file values
			var filename = file.split('.')[0];
			branch[filename] = {
				uri: uri + '/' + filename,
				view: view,
				filepath: fullpath,
				parent: branch
			};
			// parse the file
			self.processFile(app, filename, branch[filename]);
		}
	});
};

// parses the given file, putting the results into the current branch
Stark.prototype.processFile = function(app, name, item) {
	var self = this;

	// give the file an id
	item.id = shortId.generate();

	// preload the json headers, and unprocessed markdown
	var data = fs.readFileSync(item.filepath, 'utf-8');

	// parse the meta, and markdown
	// NOTE: the markdown could be parsed lazily, but doesn't really seem needed
	var parsed = jsonfm.parse(data);

	// build the preview and full text		
	var prevText = parsed.body;
	if(~parsed.body.indexOf(previewStop)){
		prevText = prevText.split(previewStop)[0];
	}else if(parsed.attributes.previewLength){
		prevText = prevText.substr(0, parsed.attributes.previewLength);
	}

	item.meta = parsed.attributes;
	item.content = {		
		body: marked(parsed.body),
		preview: marked(prevText)
	};
	console.log(util.inspect(item.meta));

	// store the file in the global recent list
	self.site.recent.push(item);

	// setup the route for the file
	app.get(item.uri, function(req, res, next){
		//console.log(util.inspect(item, false, null));
		res.render(item.view, { site: self.site, item: item });		
	});
};

// traverse a single category branch, storing items for related grab
function traverseBranch(item, branch, catArray, catIndex, catIgnore) {
	// loop through all the children in the current branch, separating
	// files from child categories
	for(var i in branch){
		if(i !== 'parent'){
			var curItem = branch[i];
			if(curItem.id && curItem.id !== item.id){				
				item.related.push(curItem);
			}else if(curItem.category && curItem.category !== catIgnore){				
				catArray.push(curItem);
			}		
		}
	}
	
	if(item.related.length >= relatedN){
		// stop if the related length has reached the requirement
		return true;
	}else if(catIndex >= catArray.length){
		// stop if there are no more child branches to traverse
		return false;
	}else{
		// recurse the next category child
		return traverseBranch(item, catArray[catIndex], catArray, catIndex + 1, catIgnore);
	}			
}

// builds a list of related posts by traversing the category tree
// starting at the current items category, and finding the most recent, 
// category related posts
Stark.prototype.buildRelated = function(item) {
	// the array to store the related n items
	item.related = [];
	// the initial branch to start the traversal
	var catBranch = item.parent;
	// the branch to ignore, to stop infinite recursion
	var ignoreId = null;

	// walk the tree doing a breadth first search, adding to the related array
	// until the list has enough items, or the tree has been walked
	while(!traverseBranch(item, catBranch, [], 0, ignoreId) && catBranch.parent){
		ignoreId = catBranch.category;
		catBranch = catBranch.parent;	
	}
	
	// finally sort and prune the related array
	_.sortBy(item.related, function(item){
		return item.meta.date;
	});
	// prune the related list to a maximum length
	if(item.related.length > relatedN){
		item.related = item.related.slice(relatedN - 1);
	}
};

Stark.prototype.getSite = function() {
	return this.site;
};

module.exports = new Stark();