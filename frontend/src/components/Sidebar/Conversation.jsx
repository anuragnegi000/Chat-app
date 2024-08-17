import { Dot } from "lucide-react";
import React from "react";

const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-gray-200 rounded p-4 cursor-pointer border-top border-b border-gray-500">
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
            <p className="font-semibold text-lg">Anurag</p>
            <p className="mt-[2px] font-thin">
              <Dot />
            </p>
            <p className="mt-[2px] font-thin"> 11 days</p>
          </div>
          <p className="text-sm font-semibold"><span className="font-light text-md">Anurag:</span> Hey, how are you doing?</p> 
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Conversation;
