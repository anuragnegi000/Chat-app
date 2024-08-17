import React from "react";

const OptionList = () => {
  return (
    <div className="flex flex-row  ml-4 gap-3 items-center justify-start p-4 "> 
      <div className="badge badge-outline">All</div>
      <div className="badge badge-outline ">Unread</div>
      <div className="badge badge-outline">Archived</div>
      <div className="badge badge-outline">Blocked</div>
    </div>
  );
};

export default OptionList;
