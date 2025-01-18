const express=require('express');
const app=express();
const port=3000;
const connectDB = require('./db');

// Connect to MongoDB
connectDB();

app.use(express.json());
app.post('/api/login',(req,res)=>{
    console.log(req.body);
    res.redirect('https://quick-link-chi.vercel.app/home');
})

app.post('/api/register',(req,res)=>{
    console.log(req.body);
    res.redirect('https://quick-link-chi.vercel.app/home');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})