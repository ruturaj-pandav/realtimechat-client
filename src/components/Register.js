import React, { useState } from 'react'

const REGISTER_URL = `http://localhost:5000/register`
export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [status, setStatus] = useState("")
  const [fileData, setFileData] = useState(null);

  const handleFileInputChange = (event) => {
    setFileData(event.target.files[0]);
  };

  async function RegisterFunction() {
    if (email !== "" && password !== "") {
      const formData = new FormData();
      formData.append('file', fileData);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('firstname', firstname);
      formData.append('lastname', lastname);
      formData.append('status', status);
      let response = await fetch(REGISTER_URL, {
        method: 'POST',
        body: formData
      })
      if (response.status === 200) {
        console.log("OKK")
      }
    }
  }
  return (
    <div>
      Register
      <div>
        <div>
          <label>firstname</label>
          <input onChange={(e) => {
            setFirstname(e.target.value)
          }} placeholder='enter firstname' type="text" />
        </div>
        <div>
          <label>lastname</label>
          <input onChange={(e) => {
            setLastname(e.target.value)
          }} placeholder='enter lastname' type="text" />
        </div>
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
          <label>status</label>
          <input onChange={(e) => {
            setStatus(e.target.value)
          }} placeholder='enter status' type="text" />
        </div>
        <div>
          <label>status</label>
          <input type="file" onChange={handleFileInputChange} />
        </div>
        <div>
          <button className='bg-blue-500 text-white p-2 rounded' onClick={() => {
            RegisterFunction()
          }}>Login</button>
        </div>
      </div>
    </div>
  )
}
