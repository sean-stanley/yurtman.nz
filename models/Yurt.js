var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Yurt = new keystone.List('Yurt', {
	map: { name: 'title' },
	autokey: { path: 'key', from: 'title', unique: true }
});

Yurt.add({
	title: { type: String, required: true },
	diameter: { type: String, required: true, default: '5m-6m'},
	author: { type: Types.Relationship, ref: 'User', index: true },
	publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
	image: { type: Types.CloudinaryImage },
	content: {
		brief: { type: Types.Html, wysiwyg: true, height: 150 },
		extended: { type: Types.Html, wysiwyg: true, height: 400 }
	},
	price: {type: String, required: true, default: '$7000-$10,000'},
	extras: {type: Types.Relationship, ref: 'YurtExtra', many: true}
	// extras: [{
// 		name: {type: String},
// 		image: {type: Types.CloudinaryImage},
// 		price: {type: Number},
// 		description: {type: Types.Html, wysiwyg: true, height: 150}
// 	}]
});

Yurt.schema.virtual('content.full').get(function() {
	return this.content.extended || this.content.brief;
});

Yurt.defaultColumns = 'title, price|20%, author|20%, publishedDate|20%';
Yurt.register();
