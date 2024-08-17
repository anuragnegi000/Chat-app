import { Paperclip, Send, SendHorizontal } from 'lucide-react'
import React from 'react'

const SendMessage = () => {
  return (
    <form className='mt-4 p-6 border-t border-gray-300 bg-white rounded-b-lg'>
        <div className='w-full relative'>
            <input className='border text-sm rounded-lg block w-full p-2.5 bg-gray-100 text-black' type='text' placeholder='Send a message'></input>
            <button className='absolute inset-y-0 end-0 flex items-center pe-3 gap-6' type="submit">
            <Paperclip className='h-5 w-5 text-orange-500' />
            <SendHorizontal className='h-5 w-5 text-orange-500' />
            </button>
        </div>
    </form>
  )
}

export default SendMessage