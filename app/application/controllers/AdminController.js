'use strict';

module.exports = function(args)
{
	var AdminWorker 	= args.workers.AdminWorker;
    var crypto	 		= args.MODULES.CRYPTO;
	var jwt 			= args.MODULES.JWT;
	var constant 		= args.constant;

	var AdminController = {

        getAll : function(previousData, req, res, next)
        {
			AdminWorker.getAll(req.query, function(err, result) {
			    if(err){
			        next(err);
                }else{
                    next(null, result);
                }
			});
        },

        getOne : function(previousData, req, res, next)
        {
			AdminWorker.getById(req.query, req.params.id, function(err, result) {
				if (result === null) {
					err = {
						code : 201,
						message : "Data not found"
					};
					next(err, null);
				} else {
					res.send({code : 200, status : "success", data : result});
				}
			});
        },

        createData : function(previousData, req, res, next)
        {
			AdminWorker.newData(req.body, function(err, success) {
				if (err) {
					next(err);
				} else {
					next(null, success);
				}
			});
        },

        updateData : function(previousData, req, res, next)
        {
			AdminWorker.updateData(req.body, req.params.id, function(err, success) {
				if (err) {
					next(err);
				} else {
					UserWorker.getById(null, req.params.id, function(err,result){
						next(null, result);
					});
				}
			});
        },

        deleteData : function(previousData, req, res, next)
        {
			AdminWorker.deleteData(null, req.params.id, function(err, success) {
				if (err) {
					next(err);
				} else {
					next(null, success);
				}
			});
        },

        hashing : function (previousData, req, res, next) {
			var password;
        	if(!req.body.newPassword || req.body.newPassword === null){
        		password = req.body.password;
        	} else {
        		password = req.body.newPassword;
        	}

            req.body.salt = crypto.randomBytes(256).toString('base64');
            req.body.iterations = 10000;

            var key = crypto.pbkdf2Sync(password, req.body.salt, req.body.iterations,512,'sha512');
            req.body.password = key.toString('hex');

            if(!req.body.newPassword || req.body.newPassword === null){
        		next();
        	} else {
        		next(null, previousData);
        	}
        },

        //service change password

        checkPassword : function (previousData, req, res, next) {

			crypto.pbkdf2(req.body.oldPassword, previousData.salt, previousData.iterations,512,'sha512',function (err,key) {
				if (err) throw  err;
				if(key.toString('hex') === previousData.password){
					next(null, previousData);
				}else{
					res.send({code : 201, message : "invalid password"});
				}
			});
        },

        changePassword : function(previousData, req, res, next)
        {
			AdminWorker.updateData(req.body, previousData.id, function(err, success) {
				if (err) {
					next(err);
				} else {
					UserWorker.getById(null, previousData.id, function(err, result){
						if (err) {
							next(err);
						} else {

							var forToken = {
						      email		 : result.email,
						      password 	 : req.body.password
				            };

							var token = jwt.sign(forToken, constant.secret);

					        if (!token) {
					          	next({code : 500, message : "Cannot create usertoken"});
					        } else {
								res.send({code: 200, message : "update berhasil", data : {token : token}});
							}
						}
					});
				}
			});
        },

        //check email
        checkEmail : function(previousData, req, res, next)
        {
			AdminWorker.checkEmail(req.query, req.body.email, function(err, result) {
				if (result === null) {
					next(null, previousData);
				} else {
					res.send({code : 201, status : "email has been used", data : {}});
				}
			});
        },

        //controllers for login
        getByUsername : function (previousData, req,res, next) {
            AdminWorker.findOne({email : req.body.email},function (err, result) {
                if (result === null) {
                    res.send({code : 201, message : "Email not Found"});
                } else if (result.dataValues === null) {
                    res.send({code : 500, message : "Server failure"});
                } else {
                    next(null, result.dataValues);
                }
            })
        }
	};

	return AdminController;
};