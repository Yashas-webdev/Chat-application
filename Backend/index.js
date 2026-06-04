// const express = require('express')
import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./config/database.js";
import userRouter from "./routes/userRoute.js"


const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8080;
//middleware
app.use(express.json());


app.use("/api/v1/user",userRouter)
app.get("/",(req,res)=>{
    res.send("Backend is running");
})

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is listening on PORT ${PORT}`)
    })
})