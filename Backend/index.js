// const express = require('express')
import express from "express";
import dotenv from "dotenv";
dotenv.config({});
import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messageRoute.js"
import cookieParser from "cookie-parser";
import cors from "cors";
import { initializeSocket } from "./socket/socket.js";


const app = express();
const router = express.Router();

const PORT = process.env.PORT || 8080;
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());


const corsOption={
    origin:'http://localhost:5173',
    credentials:true,
};
app.use(cors(corsOption));


app.use("/api/v1/user",userRoute)
// app.get("/",(req,res)=>{
//     res.send("Backend is running");
// })
app.use("/api/v1/message",messageRoute);

const start = async () => {
    await connectDB();

    const server = initializeSocket(app);

    server.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});
};
start();