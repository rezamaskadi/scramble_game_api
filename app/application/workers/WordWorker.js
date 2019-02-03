'use strict';

// THIS IS TEMPLATE

module.exports = function(args)
{
	var WordModel 		= args.models.WordModel;
	var logger 			= args.LOGGER;

	var WordWorker = {

        newData : function(attributes, cb)
        {
			WordModel.create(attributes).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        getOne : function(id, cb)
        {
			WordModel.findOne({
                attributes: ['scramble_word'],
                where : {
                    id
                }
            }).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        getOneAnswer : function(id, cb)
        {
			WordModel.findOne({
                where : {
                    id
                }
            }).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        getOneHint : function(id, cb)
        {
			WordModel.findOne({
                attributes: ['hint'],
                where : {
                    id
                }
            }).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },
	};

	return WordWorker;
};