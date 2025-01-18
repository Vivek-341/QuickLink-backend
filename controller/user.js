const express=require('express');
const User=require('../model/userSchema');
const app=express.Router();
app.post('/register',(req,res)=>{
    const {email,picture,gender,googleId}=req.body;
    const user=new User({email,picture,gender,googleId});
    user.save();
    res.send('User registered successfully');
})
app.post('/login', async (req,res)=>{
    try {
        const {email} = req.body;
        const user = await User.findOne({email});
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
})
module.exports=app;
