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
		}
];