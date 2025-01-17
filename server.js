const express=require('express');
const app=express();
const port=3000;

app.use(express.json());
app.post('/api/login',(req,res)=>{
    console.log(req.body);
    res.redirect('http://localhost:4200/home');
})

app.post('/api/register',(req,res)=>{
    console.log(req.body);
    res.redirect('http://localhost:4200/home');
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})