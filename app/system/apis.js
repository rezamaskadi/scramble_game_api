'use strict';

module.exports = function(args)
{
	var apis = {};
	var fs = args.MODULES.FS;
	var path = args.MODULES.PATH;

	var apiPath = args.CONFIG.FILE_PATH.apis;

	fs.readdirSync(apiPath).filter(function(file) {
		var apiname = file.replace(".js", "");
		if (fs.statSync(apiname).isDirectory())
		{
			
		} else
		{
			apis[apiname] = require(path.join(apiPath, apiname))(args);
		}
	});

	return apis;
}