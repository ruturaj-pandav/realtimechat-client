import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Names from "./Names"
import Chat from "./Chat"
import Account from "./Account"
// const uuidv4 = require("uuid/v4")

let VERIFY_LOGIN_URL = `http://localhost:5000/verify-login`
let VERIFY_CURRENTPASSWORD_URL = `http://localhost:5000/verify-current-password`
let CHANGE_PASSWORD_URL = `http://localhost:5000/change-password`
let CHANGE_STATUS_URL = `http://localhost:5000/change-status`
export default function Home() {
  let navigate = useNavigate();
  const [status, setStatus] = useState("")

  async function changePasswordFunction() {
    console.log("cp1")
    let currentPassword = prompt("Enter current password")
    fetch(VERIFY_CURRENTPASSWORD_URL, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword })
    })
      .then(res => res.json()).then(jsonRes => {
        if (jsonRes.success) {
          let newpass = prompt("Enter new password")
          let confirmpass = prompt("Enter new password")
          if (newpass === confirmpass) {
            fetch(CHANGE_PASSWORD_URL, {
              method: 'POST', headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ password: newpass })
            })
              .then(res => res.json()).then(jsonRes => {
                if (jsonRes.success) {
                  console.log("ok")
                }
                else {
                  console.log("PASSWORD NOT CHANGED")
                }

              })
          }

        }
        else {
          console.log("current password you entered is wrong.. please try again.")
        }
      })
  }

  async function changeStatusFunction() {

    if (status !== "") {
      fetch(CHANGE_STATUS_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status })
      })
        .then(res => res.json()).then(jsonRes => {
          if (jsonRes.success) {
            console.log("ok")
          }
          else {
            console.log("STATUS NOT CHANGED")
          }

        })

    }
  }

  async function verifyLogin() {
    let token = JSON.parse(localStorage.getItem("rtc"))
    console.log("token: ", token)
    console.log("token: ", typeof token)
    if (token === null || token === undefined || token === "") {
      navigate("/login")
    }
    else {
      fetch(VERIFY_LOGIN_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      })
        .then(res => res.json()).then(jsonRes => {
          if (jsonRes.success) {
            console.log("ok")
          }
          else {
            navigate(`/login`)
          }
        })

    }
  }

  useEffect(() => {
    console.log("in use effect")
    // verifyLogin();
  }, [])

  // function joinRoom() {
  //   if (roomID !== "") {
  //     navigate(`/chat/${roomID}/${name}`)
  //   }
  //   else {
  //     alert("enter valid room id")
  //   }
  // }

  // function createRoom() {
  // }
  // const [roomID, setRoomID] = useState("xA3jsY");
  // const [name , setName] = useState("");
  return (
    <>
    <div className='h-screen  w-5/6 flex items-center align-center justify-center rounded  mx-auto '>
      <div className='h-5/6  grid grid-cols-5'><div className='col-span-1 border'>
        <Names />
      </div>
      <div className='col-span-4 border'>
        <Account />
      </div></div>
    </div>
      {/* <div>
        <button onClick={() => {
          changePasswordFunction();
        }}>Change password</button>
      </div>
      <div>
        <label>Change status</label>
        <input placeholder='enter status' onChange={(e) => {
          setStatus(e.target.value)
        }} />
        <button onClick={() => {
          changeStatusFunction()
        }}>Chagne status</button>
      </div> */}
    </>
  )
}
