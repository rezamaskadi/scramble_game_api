'use strict';

// THIS IS TEMPLATE

module.exports = function(args)
{
	var WordModel 		= args.models.WordModel;
	let UserAnswerModel = args.models.UserAnswerModel;
	let UserModel 		= args.models.UserModel;
	var logger 			= args.LOGGER;

	WordModel.hasMany(UserAnswerModel, {foreignKey: 'word_id'});
	UserAnswerModel.belongsTo(WordModel, {foreignKey: 'word_id'});

	UserModel.hasMany(UserAnswerModel, {foreignKey: 'user_id'});
	UserAnswerModel.belongsTo(UserModel, {foreignKey: 'user_id'});

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
                attributes: ['scramble_word', 'hint'],
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
                attributes: ['hint_2'],
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
		
		historyList : function(cb)
        {
			UserAnswerModel.findAll({
				include: [
					{
						model: UserModel,
						attributes: ['username', 'email']
					},
					{
						model: WordModel,
						attributes: ['word']
					}
				]
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