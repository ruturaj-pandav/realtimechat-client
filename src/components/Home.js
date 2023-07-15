import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// const uuidv4 = require("uuid/v4")

let VERIFY_URL = `http://localhost:5000/verify-login`
export default function Home() {
  let navigate = useNavigate();


  async function verifyLogin() {

    let token = JSON.parse(localStorage.getItem("rtc"))
    console.log("token: ", token)
    console.log("token: ", typeof token)
    if (token === null || token === undefined || token === "") {

      navigate("/login")
    }
    else {


      fetch(VERIFY_URL, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token })
      })
        .then(res => res.json()).then(jsonRes => {
          if (jsonRes.success) {
            console.log("login verified")
          }
          else {
            console.log("not verified.")
            navigate(`/login`)
          }

        })
      console.log("got response")
      // if (response.status === 200) {
      //   console.log("response.status === 200")
      //   if (response.data.success) {
      //     console.log("login verified")
      //   }
      //   else {
      //     console.log("not verified.")
      //     navigate(`/login`)
      //   }


      // }
    }
  }

  useEffect(() => {
    console.log("in use effect")
    verifyLogin();
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
    <>HOmepage</>
  )
}
