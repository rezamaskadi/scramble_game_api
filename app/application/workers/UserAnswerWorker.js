'use strict';

// THIS IS TEMPLATE

module.exports = function(args)
{
	var UserAnswerModel 		= args.models.UserAnswerModel;
	var logger 			        = args.LOGGER;

	var UserAnswerWorker = {

        newData : function(attributes, cb)
        {
			UserAnswerModel.create(attributes).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
		}
	};

	return UserAnswerWorker;
};