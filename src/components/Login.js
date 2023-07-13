import React, { useState } from 'react'

import axios from "axios"
const LOGIN_URL = `http://localhost:8000/login`
export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  async function LoginFunction() {
    console.log("email  , password ::: ", email, password)
    if (email !== "" && password !== "") {
      let response = await axios.post(LOGIN_URL, { email, password })
      if (response.status === 200) {
        console.log("OK")
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
