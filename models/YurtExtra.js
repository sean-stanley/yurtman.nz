var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var YurtExtra = new keystone.List('YurtExtra', {
	map: { name: 'name' },
	autokey: { path: 'key', from: 'name', unique: true }
});

YurtExtra.add({
	name: {type: String},
	image: {type: Types.CloudinaryImage},
	price: {type: Types.Money},
	description: {type: Types.Html, wysiwyg: true, height: 150}
});

YurtExtra.relationship({ ref: 'Yurt', path: 'extras' });


YurtExtra.defaultColumns = 'name|20%, price|20%, image|20%, description';
YurtExtra.register();
