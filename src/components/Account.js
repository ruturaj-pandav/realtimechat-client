import React from 'react'

export default function Account() {
  return (
    <div className='border-2 h-full flex flex-col '>
      <div className='h-24 flex px-5 items-center text-[24px] font-bold'>
        Account information
      </div>
      <div className='flex justify-center my-4 items-center align-center'>
        Ruturaj Pandav
      </div>
      <div className='flex justify-center my-4 items-center align-center'>
        test
      </div>
      <div className='flex flex-col justify-center my-4 items-center align-center'>
        <div>status</div>
        <div>date joined</div>
      </div>

      {/* dp.
      ..
      status.
      date joined
      ..
      groups
      ..
      chagne status , change dp , change password
      deactivate account */}
    </div>
  )
}
