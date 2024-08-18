import React, { useEffect } from "react";
import Topbar from "./Topbar";
import SendMessage from "./SendMessage";
import { MessageCircle } from "lucide-react";
import MessageArea from "./MessageArea";
import useConversation from '../../zustand/useConversation'
import { set } from "mongoose";
import Messages from "./Messages";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import { useRef } from "react";

const MessageContainer = () => {
    const {selectedConversation,setSelectedConversation}=useConversation();
    const lastMessageRef = useRef(null);
    const {messages,loading}=useGetMessages();
    console.log(messages)

    useEffect(() => {
      return ()=> setSelectedConversation(null);
    },[setSelectedConversation])

    useEffect(()=>{
      setTimeout(()=>{
        lastMessageRef.current.scrollIntoView({behavior:'smooth'});
      },100)
    },)

    return (
    <div className="flex flex-col w-full h-screen"> {/* Parent element with fixed height */}
        {!selectedConversation ? (
            <NochatSelected/>
        ):(
            <div className="flex flex-col w-full h-screen"> {/* Parent element with fixed height */}
      <Topbar />
      <div className="flex-1 w-full overflow-auto" > {/* Message container */}
        {/* Chat bubbles */}
          {!loading && messages.length>0 && messages.map((message,idx)=>(
            <div key={message._id}
            ref={lastMessageRef}
            >
              <Messages
                key={idx}
                message={message}
              />
            </div>
            
          ))}
          {loading && [...Array(10)].map((_,idx)=><MessageSkeleton key={idx}/>)}
          {!loading && messages.length===0 && (
            <p className="text-center">Send a message to start the conversation</p>
          )}
      </div>
      <SendMessage/>
    </div>
        )}
    </div>
  );
};

export default MessageContainer;


const NochatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
            <p>Welcome Anurag</p>
            <p>Select a chat to start</p>
            <MessageCircle className="h-10 w-10 text-gray-200" />
        </div>
    </div>
  )}