import React from "react";
import Topbar from "./Topbar";
import SendMessage from "./SendMessage";
// import { MessageCircle } from "lucide-react";

const MessageArea = () => {
  return (
    <div className="flex flex-col w-full h-screen"> {/* Parent element with fixed height */}
      <Topbar />
      <div className="flex-1 w-full overflow-auto"> {/* Message container */}
        {/* Chat bubbles */}
        
        

        
      </div>
      <SendMessage/>
    </div>
  )
}

export default MessageArea