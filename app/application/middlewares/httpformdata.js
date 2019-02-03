'use strict';

// Uses busboy (https://github.com/mscdex/busboy)

var fs = require('fs');

module.exports = function(args)
{
	var Busboy = args.MODULES.BUSBOY;

	var streamToString = function(stream, cb) {
		const chunks = [];
		stream.on('data', (chunk) => {
			chunks.push(chunk.toString());
		});
		stream.on('end', () => {
			cb(chunks.join(''));
		});
	};

	return function(req, res, next)
	{
		if (req.method === "GET") {
			next();
			return;
		}

		if (req.headers != null) {
			var contentType = req.headers['content-type'];
			if (contentType == null || contentType.includes("multipart/form-data") == false) {
				next();
				return;
			}
		}

		var body = {};
		var files = [];
		// console.dir(Busboy);
		var busboy = new Busboy({ headers: req.headers });
		busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
			var f = {
				fieldname 	: fieldname,
				filename 	: filename,
				encoding 	: encoding,
				mimetype 	: mimetype
			};
			file.on('data', function(data) {
				f.data = data;
			});

			file.on('end', function() {
				files.push(f);
			});
		});

		busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
			body[fieldname] = val;
		});

		busboy.on('finish', function() {
			req.body = body;
			req.files = files;
			next();
		});

		req.pipe(busboy);
	};
};