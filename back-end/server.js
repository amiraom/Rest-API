const express =require('express');
const connection = require('./config/connectDB');
const user = require('./routes/userRoutes');
const app =express();
const cors=require('cors');
require('dotenv').config();
app.use(express.json());
app.use(cors())
app.use('/api',user)
const port = process.env.PORT;
connection()
app.listen(port,(err)=>{
err ? console.log(err): console.log(`running server in ${port}`)})