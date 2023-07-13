import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
// const uuidv4 = require("uuid/v4")

export default function Home() {
  let navigate = useNavigate();
  function joinRoom() {

    if (roomID !== "") {
      navigate(`/chat/${roomID}/${name}`)

    }
    else {
      alert("enter valid room id")
    }
  }
  function createRoom() {


  }
  const [roomID, setRoomID] = useState("xA3jsY");
  const [name , setName] = useState("");
  return (
    <div className='border-4 h-screen w-screen border-red-500 flex justify-center align-center'>
      <div className='border-2 border-blue-900 flex justify-center gap-[30px] h-fit'>
        <div className='border rounded h-[200px] capitalize '>
          <input value={roomID} placeholder='Enter room id' className='block border ' onChange={(e) => setRoomID(e.target.value)} />
          <input value={name} placeholder='Enter name' className='block border ' onChange={(e) => setName(e.target.value)} />
          <button onClick={() => {
            joinRoom()
          }}>Join roon</button>
        </div>
        {/* <div className='border rounded h-[200px] capitalize ' > <button onClick={() => {
          createRoom()
        }}>create room</button></div> */}
      </div>
    </div>
  )
}
