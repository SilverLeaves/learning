/////////////////////////////////////////////////////////////////////////////////
// Copyright (c) Autodesk, Inc. All rights reserved
// Written by Jaime Rosales 2016 - Forge Developer Partner Services
//
// Permission to use, copy, modify, and distribute this software in
// object code form for any purpose and without fee is hereby granted,
// provided that the above copyright notice appears in all copies and
// that both that copyright notice and the limited warranty and
// restricted rights notice below appear in all supporting
// documentation.
//
// AUTODESK PROVIDES THIS PROGRAM "AS IS" AND WITH ALL FAULTS.
// AUTODESK SPECIFICALLY DISCLAIMS ANY IMPLIED WARRANTY OF
// MERCHANTABILITY OR FITNESS FOR A PARTICULAR USE.  AUTODESK, INC.
// DOES NOT WARRANT THAT THE OPERATION OF THE PROGRAM WILL BE
// UNINTERRUPTED OR ERROR FREE.
/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
//
// Obtaining our Token 
//
/////////////////////////////////////////////////////////////////////////////////

var express = require('express');
var request = require('request');
var router = express.Router();//得到一个Router

//获得Credentialsjs中的数据
var credentials = (require ('fs').existsSync (__dirname + '/../credentials.js') ?
    require (__dirname + '/../credentials')
    : (console.log ('No credentials.js file present, assuming using FORGE_CLIENT_ID & FORGE_CLIENT_SECRET system variables.'), 
    require (__dirname + '/../credentials_'))) ;

//发送http请求，内容为得Credentialsjs中的数据
router.get ('/token', function (req, res) {
    request.post (
        credentials.Authentication,//地址
        { form: credentials.credentials },//表单，但是这里的内容格式和其他的内容格式略有不同，有待分析
        function (error, response, body) {
            if ( !error && response.statusCode == 200 )
                res.send (body) ;
        }) ;
}) ;

module.exports = router;