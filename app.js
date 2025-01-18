const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;
const connectDB = require('./db');
const userRouter=require('./controller/user');
// Connect to MongoDB
connectDB();

app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter);


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})