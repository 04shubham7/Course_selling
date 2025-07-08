const {router} = require('express');
const userRouter = router();

userRouter.post('/user/signup',(req,res)=>{
    res.json({
        message: 'sign up endpoint',
       
    });
});

userRouter.post('/user/signin',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});

userRouter.get('/user/purchases',(req,res)=>{
    res.json({
        message: 'users purchases',
       
    });
});
module.exports = {
    userRouter: userRouter
}