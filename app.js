var fs = require('fs'),
	async = require('async'),
	http = require('http');

var funcs = [
	function(cb) {
		return console.log(cb);

		var folder = process.argv[2];

		if(!folder) {
			return cb(new Error('Not folder in arguments'));
		}

		cb(null, folder);
	},
	function(folder, next) {
		fs.readdir(folder, next);
	},
	function(files, next) {
		console.log('Folder is exist');
		console.log(files);
	}
];

async.waterfall(funcs, function(err) {
	throw err;
});
