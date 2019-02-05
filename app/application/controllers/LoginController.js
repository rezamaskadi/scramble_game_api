'use strict';

module.exports = function(args)
{
    var constant 	= args.constant;
    var utilWorker 	= args.workers.UtilWorker;

    var LoginController = {


        login : function(previousData, req, res, next)
        {
            var userData = previousData; // from UserController.getOne
            if (userData === null) {
                var err = {
                    code : 500,
                    message : "Please check your credentials."
                };
                next(err, null);
            } else {
                var obj = {
                    email : userData.email,
                    user_id : userData.id,
                    password : userData.password
                };
                var token = utilWorker.tokenize(obj, constant.secret);
                var response = {
                    token : token,
                    user_id : previousData.id,
                    email : previousData.email,
                };
                res.send({code : 200, message : "success", data : response});
            }
        }
    };

    return LoginController;
};