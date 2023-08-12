const express=require('express');
const cors=require('cors');

const connectDb=require('./db/db');
const app=express();
require("dotenv").config();




connectDb();


app.get('/api/v1/',(req,res)=>
{
    res.status(200).json("home route")
})

const port=process.env.PORT || 8081;
app.listen(port,(req,res)=>
{
    console.log("server started",port);
})
