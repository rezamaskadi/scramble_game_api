'use strict';

module.exports = function(args)
{
	var middlewares	= {};

	var fs 			= args.MODULES.FS;
	var path 		= args.MODULES.PATH;

	var basePath	= __dirname + "/../" + args.CONFIG.FILE_PATH.middlewarePath;

	fs.readdirSync(basePath).filter(function(file) {
		var middleName = file.replace(".js", "");
		console.log(middleName);
		middlewares[middleName] = require(path.join(basePath, middleName))(args);
	});

	return middlewares;
}