import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

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
            password,
            profilePhoto : gender === male ? maleProfilePhoto : femaleProfilePhoto,
            gender
        })
    }catch(error){
        console.log(error);
    }
}