'use strict';

// THIS IS JUST SAMPLE

module.exports = function(args)
{
    var adminModel 	= args.models.AdminModel;
    let userModel   = args.models.UserModel;
    var constant 	= args.constant;
    var jwt			= args.MODULES.JWT;
    var crypto      = args.MODULES.CRYPTO;

    var AuthController = {

        auth : function(previousData, req, res, next)
        {
            if (req.headers.usertoken ===  "" || req.headers.usertoken === undefined) return res.send({code : 403, message : "Please provide 'usertoken' in request header."});
            jwt.verify(req.headers.usertoken, constant.secret, function(err, decoded) {
                if (decoded === null) {
                    res.send({
                        code : 201,
                        message : "Please input token",
                        data : null
                    });
                    return;
                }
                console.log(decoded);
                var email = decoded.email;
                var password = decoded.password;

                if (email === null)
                {
                    res.send({code : 403, message : "Invalid Token"});
                } else if(password === null)
                {
                    res.send({code : 403, message : "Invalid Token"});
                } else {
                    adminModel.findOne({
                        where: {
                            email : email,
                            password : password,
                        }
                    }).then(function(result) {
                        if (result === null)
                        {
                            res.send({code : 500, message : "Invalid Token"});
                        }
                        else
                        {
                            next(null, result);
                        }
                    }, function(reason) {
                        next({code : 500, message : "Invalid Token"});
                    });
                }
            });
        },

        authUser : function(previousData, req, res, next)
        {
            if (req.headers.usertoken ===  "" || req.headers.usertoken === undefined) return res.send({code : 403, message : "Please provide 'usertoken' in request header."});
            jwt.verify(req.headers.usertoken, constant.secret, function(err, decoded) {
                if (decoded === null) {
                    res.send({
                        code : 201,
                        message : "Please input token",
                        data : null
                    });
                    return;
                }
                
                var usertoken = decoded;
                var email = decoded.email;
                var password = decoded.password;
                let user_id = decoded.user_id;

                if (email === null)
                {
                    res.send({code : 403, message : "Invalid email"});
                } else {
                    userModel.findOne({
                        where: {
                            id : user_id,
                            email : email
                        }
                    }).then(function(result) {
                        if (result === null)
                        {
                            res.send({code : 500, message : "User not found"});
                        }
                        else
                        {
                            next(null, result);
                        }
                    }, function(reason) {
                        next({code : 500, message : "Invalid Token"});
                    });
                }
            });
        },

        checkPassword : function (previousData, req, res, next) {
            crypto.pbkdf2(req.body.password,previousData.salt, previousData.iterations,512,'sha512',function (err,key) {
                if (err) throw  err;
                if(key.toString('hex') === previousData.password){
                    next(null,previousData);
                }else{
                    res.send({code : 201, message : "invalid password"});
                }
            });
        }

    };

    return AuthController;
};