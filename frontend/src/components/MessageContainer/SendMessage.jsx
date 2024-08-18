import { Paperclip, Send, SendHorizontal } from "lucide-react";
import React from "react";
import useSendMessage from "../../hooks/useSendMessage";
import { sendMessage } from "../../../../backend/controllers/message.controller";
import toast from "react-hot-toast";
import { useState } from "react";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      toast.error("Please enter a message");
      return; 
    }
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 p-6 border-t border-gray-300 bg-white rounded-b-lg"
    >
      <div className="w-full relative">
        <input
          className="border text-sm rounded-lg block w-full p-2.5 bg-gray-100 text-black"
          type="text"
          placeholder="Send a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></input>
        <button
          className="absolute inset-y-0 end-0 flex items-center pe-3 gap-6"
          type="submit"
        >
          <Paperclip className="h-5 w-5 text-orange-500" />
          <SendHorizontal className="h-5 w-5 text-orange-500" />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
