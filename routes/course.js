const { Router } = require('express');
const courseRouter = Router();

courseRouter.post('/purchase',(req,res)=>{
    //you would expect the user to pay you money here
    //and then you would give them access to the course
    res.json({
        message: 'user wants to purchases',
       
    });
});

courseRouter.get('/preview',(req,res)=>{
    res.json({
        message: 'all courses',
       
    });
});

module.exports = {
    courseRouter: courseRouter
}