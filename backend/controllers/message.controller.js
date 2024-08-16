import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req,res)=>{
     try{
        const {message} = req.body;
        const {id:recieverId}=req.params;
        const senderId=req.user._id
      
        let conversation = await Conversation.findOne({
            participants:{
                $all:[senderId,recieverId]
            },
        })
        if(!conversation){
            conversation=await Conversation.create({
                participants:[senderId,recieverId],
            })
        }
        const newMessage=new Message({
            senderId:senderId,
            recieverId:recieverId,
            message:message
        })
        if(newMessage){
            conversation.messages.push(newMessage._id) 
        }

        //SOCKET.IO 
        
        await Promise.all([conversation.save(),newMessage.save()])

        res.status(200).json({
            newMessage
        })
     }
     catch(error){
        res.status(500).json({
            error:error.message
        })
     }
}

export const getMessages = async(req,res)=>{
    try{
        const {id:userToChatId}=req.params;
        const senderid=req.user._id;
        
        const conversation = await Conversation.findOne({
            participants:{
                $all:[senderid,userToChatId]
            }
        }).populate("messages");

        if(!conversation){
            return res.status(404).json([])
        }

        const messages = conversation.messages;

        res.status(200).json(conversation.messages)
    }
    catch(error){
        res.status(500).json({
            error:error.message
        })
    }
}