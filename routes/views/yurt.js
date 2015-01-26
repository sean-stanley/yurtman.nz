var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'yurt';
	locals.filters = {
		yurt: req.params.yurt
	};
	locals.data = {
		yurts: []
	};
	
	// Load the current yurt
	view.on('init', function(next) {
		
		var q = keystone.list('Yurt').model.findOne({
			key: locals.filters.yurt
		}).populate('author extras');
		
		q.exec(function(err, result) {
			locals.data.yurt = result;
			next(err);
		});
		
	});
	
	// Load other posts
	view.on('init', function(next) {
		
		var q = keystone.list('Yurt').model.find().sort('-price').populate('author extras')
		
		q.exec(function(err, results) {
			locals.data.yurts = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('yurt');
	
};
