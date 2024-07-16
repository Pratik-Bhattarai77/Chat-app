import jwt from "jsonwebtoken";


const generateTokenAndSetCookie=(userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d",
    })

    res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true, // prevent XSS attack known as cross-site scripting
        sameSite:"strict",
        secure:true
    })
}
export default generateTokenAndSetCookie;