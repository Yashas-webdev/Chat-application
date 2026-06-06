// const express = require('express')
import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./config/database.js";
import userRouter from "./routes/userRoute.js";
import cookieParser from "cookie-parser";


const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8080;
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


app.use("/api/v1/user",userRouter)
app.get("/",(req,res)=>{
    res.send("Backend is running");
})

const start = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is listening on PORT ${PORT}`);
    });
};
start();