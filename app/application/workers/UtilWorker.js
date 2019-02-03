'use strict';

// THIS IS SAMPLE

module.exports = function(args)
{
    var jwt			= args.MODULES.JWT;

    var UtilWorker = {

        tokenize : function(obj, secret) {
            return jwt.sign(obj, secret);
        }

    };

    return UtilWorker;
};