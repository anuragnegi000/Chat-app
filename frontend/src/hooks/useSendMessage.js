import { useState } from "react";
import useConversation from "../zustand/useConversation";

const useSendMessage = () => {
    const [loading,setLoading]=useState(false);
    const {messages,setMessages,selectedConversation}=useConversation();

    const sendMessage=async (message)=>{
        setLoading(true);
        try{
            console.log(selectedConversation._id);
            console.log(message);
            const response=await fetch(`http://localhost:5000/api/messages/send/${selectedConversation._id}`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify({
                    message,
                }),

            }) 
            const data=await response.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages([...messages,data]);
            console.log("sent")
        }
        catch(e){
            toast.error(e.message);
        }
        finally{
            setLoading(false);
        }
    }
    return {
        sendMessage,
        loading,
    }
}
export default useSendMessage;