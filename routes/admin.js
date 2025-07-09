const {Router} = require('express');
const {adminModel} = require('../db');
const adminRouter = Router();
//bcrypt,zod,jsonwebtokens
const bcrypt = require('bcrypt');
const { z } = require('zod');
const jwt = require('jsonwebtoken');
adminRouter.post('/signup',(req,res)=>{
    res.json({
        message: 'sign up endpoint',
       
    });
});

adminRouter.post('/signin',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});

adminRouter.post('/',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});
adminRouter.put('/',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});

adminRouter.get('/course/bulk',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});
module.exports = {
    adminRouter: adminRouter
}





