'use strict';

module.exports =
[
	//API register
	{
		method : "post", //success
		endpoint : "user/register",
		controllers : [
			"UserController.createData",
			"LoginController.login"
		]
	},
    //API get list user
    {
        method : "get", //success
        endpoint : "admin/users/list",
        controllers : [
            "AuthController.auth",
            "UserController.listData"
        ]
    }
];