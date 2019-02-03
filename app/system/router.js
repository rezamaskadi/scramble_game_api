'use strict';

module.exports = function(args)
{
	var controllers = args.controllers;
	var app 		= args.app;
	var CONFIG 		= args.CONFIG;

	var fs 			= args.MODULES.FS;
	var path 		= args.MODULES.PATH;
	var async 		= args.MODULES.ASYNC;
	var _ 			= args.MODULES._;
	var chalk 		= args.MODULES.CHALK;

	var app 		= args.MODULES.EXPRESS_APP;

	var formdata	= args.middlewares.httpformdata;
	var busboy		= args.MODULES.BUSBOY;

	var methods 	= {

		generateAPI : function(apiConfig, parentEndpoint)
		{
			for (var index in apiConfig)
			{
				var api = apiConfig[index];
				var urlPath;
				var lastEndpoint;
				var method = api.method;

				parentEndpoint = (parentEndpoint) ? parentEndpoint.toLowerCase() : null;
				lastEndpoint = api.endpoint;

				if (parentEndpoint)
				{
					urlPath = "/" + parentEndpoint + "/" + lastEndpoint;
				} else {
					urlPath = "/" + lastEndpoint;
				}

				this.endpointHandler(method, urlPath, api);

			}
		},

		getController : function(controllerString)
		{
			try {
				var conFileName = controllerString.split(".")[0];
				var conFuncName = controllerString.split(".")[1];
				return controllers[conFileName][conFuncName];
			} catch (err) {
				return null;
			}
		},

		execController : function(controllerString, previousData, req, res, next)
		{
			var conFunc = this.getController(controllerString);
			if (!conFunc)
			{
				console.log(args.CONSOLE.ERROR("No Controller : " + controllerString));
				next(args.ERROR.INTERNAL, null);
			} else {
				conFunc(previousData, req, res, function(err, data, shouldExtend) {
					if (shouldExtend == null)
					{
						shouldExtend = true;
					}
					if (previousData != null && previousData.dataValues != null) { // sequelize thing
						previousData = previousData.dataValues;
					}
					if (err) {
						return next(err);
					} else {
						if (shouldExtend)
						{
							next(null, _.extend(data, previousData));
						} else 
						{
							next(null, data);
						}
					}
				});
			}
		},

		endpointHandler : function(method, url, config)
		{
			var self = this;
			if (config && config.controllers && config.controllers.length > 0)
			{
				app[method](url, formdata, function(req, res, next) {
					req.whitelisted = config.whitelisted;
					if (req.whitelisted != 1) {
						req.whitelisted = 0;
					}
					var controllerMethods = [];
					config.controllers.forEach( function(controllerString, index) {
						controllerMethods.push(function(previousData, cb) {
							if (!cb) {
								cb = previousData;
								previousData = {};
							}

							self.execController(controllerString, previousData, req, res, cb);

						});
					});

					async.waterfall(controllerMethods, function(err, data) {
						if (err) {
							console.log(args.CONSOLE.ERROR(JSON.stringify(err)));
							var status = err.code ? (_.isNumber(err.code) ? err.code : 500) : 500;
							var message = err.message ? err.message : "Unknown error :(";
							res.status(status);
							res.json({status : status, message : message, data : err})
						} else {
							res.json({
								code : 200,
								status : 'success',
								data : data
							})
						}
					});
				});
			} else {
				console.log("No handlers for : " + url);
			}
		},
	};

	fs.readdirSync(__dirname + "/../" + CONFIG.FILE_PATH.apis).filter(function(file1) {
		let tempPath = __dirname + "/../" + CONFIG.FILE_PATH.apis + file1;
		if (fs.statSync(tempPath).isDirectory()) {

			fs.readdirSync(tempPath).filter(function(file2) {
				var controllerPath = tempPath + "/" + file2;
				var apiConfig = require(controllerPath);
				methods.generateAPI(apiConfig, file1);
			});

		} else {
			var apiConfig = require(tempPath);
			methods.generateAPI(apiConfig, null);
		}
	});
}