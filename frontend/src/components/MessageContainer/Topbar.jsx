import { EllipsisVertical } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <div className="p-[0.6rem] bg-gray-100 flex">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/115611556?v=4"
            alt="user avatar"
          />
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="ml-2">
            <p className=" font-semibold text-lg">Anurag</p>
            <p>typing...</p>
        </div>
        <div>
          <EllipsisVertical className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
