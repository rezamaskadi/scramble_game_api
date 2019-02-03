'use strict';

// THIS IS TEMPLATE

module.exports = function(args)
{
	var UserModel 		= args.models.UserModel;
	var logger 			= args.LOGGER;

	var UserWorker = {

        newData : function(attributes, cb)
        {
			UserModel.create(attributes).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        getOne : function(id, cb){
            UserModel.findById(id).then(function(result){
                cb(null, result);
            }, function(reason){
                logger.error(reason.message);
				cb({code : 500, message : reason.message});
            })
        },

        updateScore : function(id, score, cb){
            UserModel.update({score}, { where: { id }}).then(function(result){
                cb(null, result);
            }, function(reason){
                logger.error(reason.message);
				cb({code : 500, message : reason.message});
            })
        },

        updateHint : function(id, total_hint, cb){
            UserModel.update({total_hint}, { where: { id }}).then(function(result){
                cb(null, result);
            }, function(reason){
                logger.error(reason.message);
				cb({code : 500, message : reason.message});
            })
        }
	};

	return UserWorker;
};