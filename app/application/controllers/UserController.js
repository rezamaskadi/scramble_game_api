'use strict';

module.exports = function(args)
{
	var UserWorker 	    = args.workers.UserWorker;

	var UserController = {

        createData : function(previousData, req, res, next)
        {
			UserWorker.newData(req.body, function(err, success) {
				if (err) {
					next(err);
				} else {
					next(null, success);
				}
			});
		},
		
		listData : function(previousData, req, res, next)
        {
			UserWorker.listData(function(err, success) {
				if (err) {
					next(err);
				} else {
					next(null, success);
				}
			});
        }
	};

	return UserController;
};