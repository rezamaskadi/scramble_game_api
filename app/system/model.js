'use strict';

module.exports = function(args, cb)
{
	var models 		= {};
	var relations 	= args.relations;

	var fs 			= args.MODULES.FS;
	var path 		= args.MODULES.PATH;

	var basePath	= __dirname + "/../" + args.CONFIG.FILE_PATH.modelPath;

	fs.readdirSync(basePath).filter(function(file) {
		var modelName = file.replace(".js", "");
		console.log(modelName);
		models[modelName] = require(path.join(basePath, modelName))(args);
	});

	var totalSynch = 0;
	var targetSynch = Object.keys(models).length;

	for (var rel in relations)
	{
		var relation = relations[rel];
		var source = models[relation.source];
		var dest = models[relation.destination];
		var typeSource = relation.typeSource;
		var typeDestination = relation.typeDestination;
		
		source[typeSource](dest);
		dest[typeDestination](source);
	}

	for (var name in models)
	{
		var model = models[name];
		console.log("Sync " + name);
		model.sync().then(function(result) {
			console.log(result + " synched.");
			totalSynch += 1;
			if (totalSynch == targetSynch)
			{
				cb(models);
			}
		});
	}

	return models;
}