var keystone = require('keystone');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Set locals
	locals.section = 'yurts';
	locals.filters = {
		yurt: req.params.yurt
	};
	locals.data = {
		yurts: []
	};
	
	
	// Load all yurts
	view.on('init', function(next) {
		
		var q = keystone.list('Yurt').model.find().sort('-price').populate('author')
		.populate('extras');
		
		q.exec(function(err, results) {
			locals.data.yurts = results;
			next(err);
		});
		
	});
	
	// Render the view
	view.render('yurts');
	
};
