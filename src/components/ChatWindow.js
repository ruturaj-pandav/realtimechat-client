import React, { useState, useEffect } from 'react'
import io from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function ChatWindow() {
  let navigate = useNavigate()
  const params = useParams()

  const [roomID, setRoomID] = useState(params.roomID)
  const [name, setName] = useState(params.name)
  const [users, setUsers] = useState(['ameya', 'ruturaj', 'sanket'])


  const [activity, setActivity] = useState([])

  const addActivity = (act) => {
    setActivity((prevArray) => [...prevArray, act])
  }

  useEffect(() => {

    if (name !== "") {

      const socket = io('http://localhost:3001');

      let d = new Date();
      let time = d.toLocaleTimeString();
      let data = { roomID, name, time }
      socket.emit('joinRoom', (data));



      socket.on('userJoined', (message) => {
        console.log("userJoined event ", message);

        addActivity({
          message: message,
          sender: "system",
          time: data.time
        })


      });


      socket.on('newMessage', (data) => {
        console.log("act length ", activity.length);


        addActivity({
          message: data.message,
          sender: data.name,
          time: data.time
        })





      });


      return () => {
        socket.disconnect();
      };
    } else {
      navigate("/")


    }
  }, []);
  function sendMessage(message) {
    const socket = io('http://localhost:3001');
    let d = new Date();
    let time = d.toLocaleTimeString();
    let data = { name, message, time }
    socket.emit('message', (data));


  }
  return (
    <div className='grid grid-cols-5 h-screen'>

      <div className='col-span-1  flex flex-col '>

        {users.map((user, index) => {
          return (
            <div className={` border py-6 capitalize text-center font-bold text-green-400 text-2xl`}>
              {user === name ? `${user} ( You )` : user}
            </div>
          )
        })}


      </div>

      <div className='col-span-4  px-8 w-full  flex flex-col justify-between my-4'>
        <div>
          <div className='block text-center'>
            <span className='block '>{roomID}</span>
            <span className='block '>{users.length} members</span>
          </div>
          <div>
            {activity.map((activity, index) => {
              return (
                <>
                  <div className={` my-2   ${activity.sender === "system" && 'flex justify-center  '}  
             ${activity.sender === name ? 'flex justify-end ' : ' flex justify-start  '}
              `}>
                    <div className={` px-2 flex flex-col ${activity.sender === name && 'bg-green-200 px-8 py-1 rounded'}  ${activity.sender === "system" && 'bg-blue-500 round-1 text-white px-4 py-1 my-2 capitalize text-sm  '}   ${activity.sender !== name && activity.sender !== "system" && ' bg-gray-300  px-8 py-1 rounded'}
             
              `} >
                      {activity.sender !== "system" && <div className=''>
                        <span className='text-sm capitalize text-orange-500 font-semibold'>{activity.sender}</span>
                      </div>}
                      <div>
                        <span className='inline-block font-semibold'>{activity.message}</span>
                        <span className='inline-block ml-8 text-xs'>{activity.time}</span>
                      </div>

                    </div>
                  </div>
                </>
              )
            })}</div></div>
        <div className=' border '>
          <input type="text" placeholder='type here' className='w-full border px-4 py-3 bg-gray-100  rounded text-xl  ' onKeyPress={(e) => e.key === 'Enter' && sendMessage(e.target.value)} />

        </div>
      </div>
    </div>
  )
}
