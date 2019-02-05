'use strict';

module.exports =
[
    //API register
    {
        method : "post", //success
        endpoint : "word/create",
        controllers : [
            "AuthController.auth",
            "WordController.createData"
        ]
    },
    //API Get One Word / Question
    {
        method: "get",
        endpoint: "word/one/:id",
        controllers: [
            "AuthController.authUser",
            "WordController.getOne"
        ]
    },
    {
        method: "post",
        endpoint: "word/answer/:id",
        controllers: [
            "AuthController.authUser",
            "WordController.answerWord"
        ]
    },
    {
        method: "get",
        endpoint: "word/hint/:id",
        controllers: [
            "AuthController.authUser",
            "WordController.useHint"
        ]
    },
    {
        method: "get",
        endpoint: "word/history/list",
        controllers: [
            "AuthController.auth",
            "WordController.historyList"
        ]
    }
];