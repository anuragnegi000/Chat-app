import { Search } from "lucide-react";
import React, { useState } from "react";
import useConversation from "../../zustand/useConversation";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";

const Searchinput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error('Search term too short');
    }

    const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      toast.error('No conversation found');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-3 max-w-lg bg-gray-300">
        <label className="input input-bordered flex items-center gap-2 font-bold">
          <Search className="h-4 w-4 opacity-70" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>
    </form>
  );
};

export default Searchinput;
