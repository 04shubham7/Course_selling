const {Router} = require('express');
const {adminModel} = require('../db');
const adminRouter = Router();

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

adminRouter.post('/course',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});
adminRouter.put('/course',(req,res)=>{
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





