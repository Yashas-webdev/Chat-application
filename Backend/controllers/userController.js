import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const register = async(req,res)=>{
    try{
        const {fullName, username, password, confirmPassword, gender}= req.body;
        if(!fullName || !username || !password || !confirmPassword || !gender){
            return res.status(400).send({
                message:"All fields are required"
            });
        }

        if(password != confirmPassword){
            return res.status(400).send({
                message:"Password doesn't match the confirmpassword"
            })
        }

        const user = await User.findOne({username})
        if(user){
            return res.status(400).send({
                messsage:"Username already exist try different"
            });
        }
        const hashedPassword = await bcrypt.hash(password,10 )
        
        const maleProfilePhoto = `https://api.dicebear.com/10.x/adventurer/svg`;
        const femaleProfilePhoto = `https://api.dicebear.com/10.x/adventurer/svg`;
        
        await User.create({
            fullName,
            username,
            password:hashedPassword,
            profilePhoto : gender === "male" ? maleProfilePhoto : femaleProfilePhoto,
            gender
        })

        return res.status(201).json({
            success:true,
            message:"User registered successfully",
            success:true
        })
    }catch(error){
        console.log(error);
    }
};
export const login = async(req,res)=>{
    try{
        console.log("req.body =", req.body);
        const {username, password} = req.body || {};
        if(!username || !password){
            return res.status(400).send({
                message:"All fields are required"
            });
        }

        const user = await User.findOne({username});
        if(!user){
            return res.status(400).send({
                message:"Incorrect username or password",
                success:false
            })
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(400).json({
                message:"Incorrect username or password",
                success:false
            })
        };

        const tokenData = {
            userId:user._id
        };

        const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:'1d'});

        return res.status(200).cookie("token",token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).send({
            _id:user._id,
            username: user.username,
            fullName: user.fullname,
            profilePhoto: user.profilePhoto 
        });
        
    }catch(error){
        console.log(error);
    }
}

export const logout = (req,res)=>{
    try{
        return res.status(200).cookie('token',"",{maxAge:0}).send({
            message:"logged out successfully."
        })
    }catch(error){
        console.log(error);
    }
}