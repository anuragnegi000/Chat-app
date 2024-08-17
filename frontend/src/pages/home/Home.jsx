import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import MessageContainer from '../../components/MessageContainer/MessageContainer.jsx'


const Home = () => {
  return (
    <div className='flex flex-row min-h-full'>   
        <Sidebar/>
        <MessageContainer/>
    </div>
  )
}

export default Home