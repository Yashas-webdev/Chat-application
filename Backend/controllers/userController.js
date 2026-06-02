import User from "../models/userModel";
import bcrypt from "bcrypt.js";

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

        await User.create({
            fullName,
            username,
            password,
            profilePhoto,
            gender
        })
    }catch(error){

    }
}