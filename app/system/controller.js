'use strict';

module.exports = function(args)
{
	var fs = args.MODULES.FS;
	var path = args.MODULES.PATH;

	var basePath = __dirname + "/../" + args.CONFIG.FILE_PATH.controllerPath;

	var controllers = {};

	fs.readdirSync(basePath).filter(function(file) {
		var controllerName = file.replace(".js", "");
		controllers[controllerName] = require(path.join(basePath, controllerName))(args);
	});

	return controllers;
}