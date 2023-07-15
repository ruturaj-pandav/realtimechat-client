import React from 'react'

let VERIFY_USER_EXISTS = `http://localhost:5000/verify-user-exists`
export default function Names() {
  async function VerifyUserExists(){
    console.log("sending new message")
    let user_id = prompt("enter a new userid")
    console.log(`userID : ` , user_id)
    fetch(VERIFY_USER_EXISTS, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_id })
    }).then(res => res.json()).then(jsonRes => {
        if (jsonRes.success) {
          console.log("USER EXISTS")
        }
        else {
          console.log("USER NOT FOUND")
          // navigate(`/login`)
        }
      })

  }
  let names = ["ameya", "sanket", "pratik", "sakshi"]
  return (
    <div>
      <div className=' border flex justify-center items-center h-16 '>
        Account Information
      </div>
      <div className=' border flex justify-center items-center h-16 my-2 '>
        New message
      </div>
      {names.map((name, index) => {
        return (
          <div className='grid grid-cols-4  border'>
            <div className='col-span-1  flex justify-center items-center'>dp</div>
            <div className='col-span-3 flex flex-col justify-center p-2 '>
              <div >{name}</div>
              <div>last message</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
