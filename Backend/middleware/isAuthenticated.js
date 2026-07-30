import jwt from "jsonwebtoken";

const isAuthenticated = async(req, res, next)=>{
    try{

        console.log("Headers Cookie:", req.headers.cookie);
        console.log("Parsed Cookies",req.cookies);
        
        const token = req.cookies.token;
        if(!token){
            return res.status(401).send({
                message:"User not authenticated",
                success:false  
            })
        }

        const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
        
        if(!decode){
            return res.status(401).send({
                message:"Invalid token",
                success:false
            })
        }
        req.id = decode.userId;
        next(); 
    }catch(error){
        console.log(error);
    }
} 
export default isAuthenticated;

