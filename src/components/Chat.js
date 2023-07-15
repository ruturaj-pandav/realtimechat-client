import React from 'react'

export default function Chat() {
  let myname = "ruturaj"
  let messages = [
    { sender: "sakshi", content: "hello ruturaj", created_at: "9:57" },
    { sender: "ruturaj", content: "hello sakshi", created_at: "9:58" },
  ]
  return (
    <div className='border-2 h-full flex flex-col justify-between'>
      <div className='border-4 h-full '>
        <div className='border grid grid-cols-7 pr-[20px] '>
          <div className='col-span-1 flex justify-center items-center '>dp</div>
          <div className='col-span-5 flex flex-col flex justify-center py-2 '>
            <span className='text-[20px] font-semibold capitalize block'>name</span>
            <span className='text-[15px] block'>status</span>

          </div>
          <div className='col-span-1 flex justify-center gap-[20px] items-center'>
            <div>search</div>
            <div>pin</div>
            <div>info</div>
          </div>

        </div>
        <div className='w-5/6 h-max my-3 mx-auto '>
          {messages.map((message, index) => {
            return (
              <span className={`border block ${myname === message.sender ? 'text-right ' : ''}  `}>
                {message.content}
              </span>
            )
          })}
        </div>
      </div>
      <div className=' w-full border-2 '>
        <input type='text' placeholder='' className='text-[15px] font-semibold p-3 mx-auto w-5/6 block border  rounded outline-none' />
      </div>
    </div>
  )
}
