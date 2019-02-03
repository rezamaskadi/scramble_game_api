'use strict';

// THIS IS TEMPLATE

module.exports = function(args)
{
	var AdminModel 		= args.models.AdminModel;
	var logger 			= args.LOGGER;

	var AdminWorker = {

        getAll : function(where, cb)
        {
			AdminModel.findAll({where : where, attributes : {exclude : ['salt','iterations','password']}}).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        getById : function (attributes, id, cb) {
			AdminModel.findOne({where : {id : id}, attributes : {exclude : ['salt','iterations','password']}}).then(function (result) {
				cb(null, result);
			},function (reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        newData : function(attributes, cb)
        {
			AdminModel.create(attributes).then(function(result) {
				cb(null, result);
			}, function(reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        deleteData : function(attributes, id, cb)
        {
			AdminModel.destroy({where: {id : id}}).then(function(result) {
				cb(null, {code : 200, message : "Data Successfully deleted"});
			}, function(reason){
				logger.error(reason.message);
				cb({ code : 500, message: "Delete failed"})
			});
        },

        updateData : function(attributes, id, cb)
        {
			AdminModel.update(attributes, { where : {id : id}}).then(function(result) {
				cb(null, { code : 200, message : "Data succesfully updated"});
			}, function(reason) {
				logger.error(reason.message);
				cb({ code : 500, message: "Update failed"})
			});
        },

        //check email
        checkEmail : function (attributes, email, cb) {
			AdminModel.findOne({where : {email : email}}).then(function (result) {
				cb(null, result);
			},function (reason) {
				logger.error(reason.message);
				cb({code : 500, message : reason.message});
			});
        },

        findOne : function (opt,cb) {
            AdminModel.findOne({
                where : opt
            }).then(function (result) {
                cb(null, result);
            }, function (reason) {
                cb({code:500, message : reason.message});
            });
        }
	};

	return AdminWorker;
};