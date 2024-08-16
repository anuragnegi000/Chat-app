import User from "../models/user.model.js";

export const getUserForSidebar = async (req,res)=>{
    try{
        const loggedUserId=req.user._id;
        const allUsers = await User.find({
            _id:{
                $ne:loggedUserId 
            }
        }).select("-password");
        res.status(200).json({
            users:allUsers
        })
    }
    catch(error){
        res.status(200).json({
            error:error.message
        })
    }
}