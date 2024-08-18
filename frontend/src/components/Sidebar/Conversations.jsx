import React from 'react'
import Conversation from './Conversation.jsx'
import useGetConversations from '../../hooks/useGetConversation'

const Conversations = () => {
  const {loading, conversations} = useGetConversations();
  return (
    <div className='flex flex-col overflow-auto'>
        {conversations.map((conversation,idx) => 
            <Conversation
             key={conversation._id}
            conversation={conversation}
            lastIdx={idx===conversations.length-1}
            />
        )}
    </div>
  )
}

export default Conversations