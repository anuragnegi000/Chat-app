import { create } from "zustand";

const useConversation = create((set) => ({
    selectedConversation: null,
    messages: [], // Initialize messages here
    setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
    setMessages: (messages) => set({ messages }),
}));

export default useConversation;
