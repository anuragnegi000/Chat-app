import { Dot } from "lucide-react";
import React from "react";
// import useGetConversations from '../../hooks/useGetConversation'
import useConversation from '../../zustand/useConversation'

const Conversation = ({ conversation, lastIdx }) => {
  const {selectedConversation,setSelectedConversation}=useConversation();
  const isSelected=selectedConversation?._id===conversation._id;
  
  return (
    <>
      <div className={ `flex gap-2 items-center hover:bg-gray-200 rounded p-4 cursor-pointer border-top border-b border-gray-500
        ${isSelected ? 'bg-gray-200' : ''} 
        `}
        onClick={()=>setSelectedConversation(conversation)}
        > 
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img
              src="https://avatars.githubusercontent.com/u/115611556?v=4"
              alt="user avatar"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row  gap-[1px]">
            <p className="font-semibold text-lg">{conversation.fullName}</p>
            <p className="mt-[2px] font-thin">
              <Dot />
            </p>
            <p className="mt-[2px] font-thin"> 11 days</p>
          </div>
          <p className="text-sm font-semibold"><span className="font-light text-md">Anurag:</span> Hey, how are you doing?</p> 
        </div>
      </div>
      {lastIdx ? null : <div className="border-b border-gray-500"></div>}
    </>
  );
};

export default Conversation;
