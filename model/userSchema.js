const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    email:String,
    picture:String,
    gender:String,
    googleId:String
})

module.exports=userSchema;