'use strict';

module.exports = function(args)
{
    var WordWorker 	     = args.workers.WordWorker;
    let UserWorker       = args.workers.UserWorker;
    let UserAnswerWorker = args.workers.UserAnswerWorker;
    let Lodash           = args.MODULES.LODASH;

	var WordController = {

        createData : function(previousData, req, res, next)
        {
            req.body.scramble_word = Lodash.shuffle(req.body.word).join('');
			WordWorker.newData(req.body, function(err, success) {
				if (err) {
					next(err);
				} else {
					next(null, success);
				}
			});
        },

        getOne : function(previousData, req, res, next)
        {
            let id = req.params.id
			WordWorker.getOne(id, function(err, success) {
				if (err) {
					next(err);
				} else {
					next(null, success);
				}
			});
        },

        answerWord : function(previousData, req, res, next)
        {
            // console.log(JSON.stringify(previousData, null, 2));
            if(previousData.score < 10){
                next({message: "game over, your score is 0"}, null)
            } else {
                let id = req.params.id;
                WordWorker.getOneAnswer(id, function(err, success) {
                    if (err) {
                        next(err);
                    } else {
                        let answerLowerCase = req.body.answer.toLowerCase();
                        if(success.word !== answerLowerCase){
                            let data = {
                                user_id: previousData.id,
                                word_id: id,
                                status: 'wrong',
                                answer: answerLowerCase
                            }
                            UserAnswerWorker.newData(data, function(err, success){
                                if(err){
                                    next(err);
                                } else {
                                    let score = previousData.score-10
                                    UserWorker.updateScore(previousData.id, score, function(err, success){
                                        if(err){
                                            next(err);
                                        } else {
                                            next(null, {message: "wrong answer, score -10", now_score: score})
                                        }
                                    })      
                                }
                            })
                        } else {
                            let data = {
                                user_id: previousData.id,
                                word_id: id,
                                status: 'correct',
                                answer: answerLowerCase
                            }
                            UserAnswerWorker.newData(data, function(err, success){
                                if(err){
                                    next(err);
                                } else {
                                    let score = previousData.score+100
                                    UserWorker.updateScore(previousData.id, score, function(err, success){
                                        if(err){
                                            next(err);
                                        } else {
                                            next(null, {message: "correct answer, score +100", now_score: score})
                                        }
                                    })      
                                }
                            })
                        }
                    }
                });
            }
        },

        useHint : function(previousData, req, res, next)
        {
            if(previousData.total_hint < 1){
                next({message: "failed, your hint is 0"}, null)
            } else {
                let total_hint = previousData.total_hint-1
                UserWorker.updateHint(previousData.id, total_hint, function(err, successUpdate){
                    if(err){
                        next(err);
                    } else {
                        let id = req.params.id
                        WordWorker.getOneHint(id, function(err, success) {
                            if (err) {
                                next(err);
                            } else {
                                success.dataValues.total_hint = total_hint;
                                next(null, success);
                            }
                        });
                    }
                })
            }
        },

        historyList : function(previousData, req, res, next)
        {
			WordWorker.historyList(function(err, success) {
				if (err) {
					next(err);
				} else {
					next(null, success);
				}
			});
        },
	};

	return WordController;
};