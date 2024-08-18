import React from 'react'
import Searchinput from './Searchinput'
import OptionList from '../OptionList/OptionList'
import Conversations from './Conversations'

const Sidebar = () => {
  return (
    <div className='w-1/2 h-screen bg-gray-100 flex flex-col justify-between'>
        <Searchinput/>
         <OptionList/>
         <Conversations/>
    </div>
  )
}

export default Sidebar