const express=require('express');
const mongoose=require('mongoose');
const {userRouter} = require('./routes/user');
const {courseRouter} = require('./routes/course');
const {adminRouter} = require('./routes/admin');
const app=express();
app.use(express.json());

app.use('/api/v1/user',userRouter);
app.use("/api/v1/admin",adminRouter);
app.use('/api/v1/course',courseRouter);






async function main() {
   //use dotenv to load environment variables 
   await mongoose.connect("mongodb+srv://shubham1230101130:tBc3kiQrDkXdq7nk@cluster0.tbrbsay.mongodb.net/CourseSellingApp");
    app.listen(3000,()=>{
        console.log('Server is running on port 3000');
    });
}
main().catch(err=>{
    console.error('Error connecting to the database', err);
});