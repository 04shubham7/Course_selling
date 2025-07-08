const express=require('express');
const app=express();
app.use(express.json());

app.post('/user/signup',(req,res)=>{
    res.json({
        message: 'sign up endpoint',
       
    });
});

app.post('/user/signin',(req,res)=>{
    res.json({
        message: 'sign in endpoint',
       
    });
});

app.get('/user/purchases',(req,res)=>{
    res.json({
        message: 'users purchases',
       
    });
});
app.post('/course/purchase',(req,res)=>{
    //you would expect the user to pay you money here
    //and then you would give them access to the course
    res.json({
        message: 'user wants to purchases',
       
    });
});

app.get('/courses',(req,res)=>{
    res.json({
        message: 'all courses',
       
    });
});








app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});