'use strict';

module.exports =
[
    //API login
    {
        method : "post", //success
        endpoint : "admin/login",
        controllers : [
            "AdminController.getByUsername",
            "AuthController.checkPassword",
            "LoginController.login"
        ]
	},
	//API register
    {
        method : "post", //success
        endpoint : "admin/register",
        controllers : [
            "AdminController.hashing",
            "AdminController.createData"
        ]
    }
];