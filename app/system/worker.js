'use strict';

module.exports = function(args)
{
	var workers = {};

	var fs = args.MODULES.FS;
	var path = args.MODULES.PATH;

	var basePath = __dirname + "/../" + args.CONFIG.FILE_PATH.workerPath;

	fs.readdirSync(basePath).filter(function(file) {
		var workerName = file.replace(".js", "");
		workers[workerName] = require(path.join(basePath, workerName))(args);
	});

	return workers;
}