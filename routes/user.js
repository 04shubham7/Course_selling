const {Router} = require('express');
const userRouter = Router();

userRouter.post('/signup',(req,res)=>{
    res.json({
        message: 'sign up endpoint',
       
    });
});

userRouter.post('/signin',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});

userRouter.get('/purchases',(req,res)=>{
    res.json({
        message: 'users purchases',
       
    });
});
module.exports = {
    userRouter: userRouter
}