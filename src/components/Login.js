import React, { useState } from 'react'

import {useNavigate} from "react-router-dom"

const LOGIN_URL = `http://localhost:8000/login`
export default function Login() {
  let navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function LoginFunction() {
    console.log("Login1")
    console.log("email  , password ::: ", email, password)
    if (email !== "" && password !== "") {
      console.log("login2")
      let response = await fetch(LOGIN_URL, {
        method: 'POST',
        body: {email , password}
      })
      console.log("login3")
      if (response.status === 200) {
        console.log("login4")
        if (response.data.success) {
          console.log("login5")
          console.log("response.data.token :: " , response.data.token)
          localStorage.removeItem("rtc")
          localStorage.setItem("rtc" , response.data.token)
          console.log("login")
          navigate(`/`)

        }
      }
    }
  }
  return (
    <div>
      Login
      <div>
        <div>
          <label>Email</label>
          <input onChange={(e) => {
            setEmail(e.target.value)
          }} placeholder='enter email' type="email" />
        </div>
        <div>
          <label>Password</label>
          <input onChange={(e) => {
            setPassword(e.target.value)
          }} placeholder='enter password' type="password" />
        </div>
        <div>
          <button className='bg-blue-500 text-white p-2 rounded' onClick={() => {
            LoginFunction()
          }}>Login</button>
        </div>
      </div>
    </div>
  )
}
