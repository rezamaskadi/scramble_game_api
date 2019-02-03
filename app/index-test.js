'use strict';

exports.start = function(port, cb)
{
	var express 		= require('express');
	var Sequelize 		= require('sequelize');

	var args 			= {};

	/** Configs **/
	args.CONFIG 		= require('./config/config');

	/** Set file paths **/
	args.CONFIG.FILE_PATH = {
		controllerPath 	: 'application/controllers/',
		modelPath 		: 'application/models/',
		workerPath 		: 'application/workers/',
	//	middlewarePath  : 'application/middlewares/',
		apis 			: "apis/"
	};

	var dbenv 			= args.CONFIG[process.env.DB_ENV];
	if (dbenv == null) {
		dbenv = args.CONFIG.development;
	}

	/** Load the modules **/
	args.MODULES 		= {
		SEQUELIZE 	: new Sequelize(dbenv),
		DATATYPES 	: Sequelize.DataTypes,
		EXPRESS_APP : express(),
		FS 			: require('fs'),
		PATH 		: require('path'),
		ASYNC 		: require('async'),
		CHALK 		: require('chalk'),
		UUID 		: require('uuid'),
		_ 			: require('underscore'),
		JWT 		: require('jsonwebtoken'),
		NODERSA 	: require('node-rsa')
	};

	/** Console Utils **/
	args.CONSOLE 		= {
		ERROR : args.MODULES.CHALK.white.bgRed.bold,
		INFO : args.MODULES.CHALK.white.bgGreen.bold,
		WARNING : args.MODULES.CHALK.white.bgYellow.bold
	};

	args.LOGGER			= {
		error : function(obj) {
			console.log(args.CONSOLE.ERROR(obj));
		},

		info : function(obj) {
			console.log(args.CONSOLE.INFO(obj));
		},

		warning : function(obj) {
			console.log(args.CONSOLE.WARNING(obj));
		}
	};

	/** Handle shits **/
	process.on('unhandledRejection', function(reason, promise) {
		args.LOGGER.error("unhandledRejection");
		args.LOGGER.error(reason.message);
	});

	/** Error Defaults **/
	args.ERROR 			= {
		INTERNAL : {
			code : 500,
			message : "Internal server failure :("
		}
	};

	/** Setup Middlewares **/
	args.MODULES.EXPRESS_APP.use(require('morgan')('combined'));
	args.MODULES.EXPRESS_APP.use(require('body-parser').json());
	//args.MODULES.EXPRESS_APP.use(require('./application/middlewares/UserAuth'));

	/** Load Constant **/
	args.constant 		= require('./system/constant')(args);

	/** Load Middlewares **/
	//args.middlewares = require('./system/middleware')(args);

	/** Load Relations **/
	args.relations 		= require('./system/relation')(args);

	/** Load Models **/
	args.models 		= require('./system/model')(args, function(models) {
		console.log("All models has synched");

		/** Load Workers **/
		args.workers 		= require('./system/worker')(args);

		/** Load controllers **/
		args.controllers 	= require('./system/controller')(args);

		/** Setup routers **/
		require('./system/router')(args);

		/** Run 😀 **/
		args.MODULES.EXPRESS_APP.listen(port, function() {
			args.LOGGER.info("Running..");
			cb();
		});
	});
}