import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../HELPER/axiosInstance'

const Update = () => {
  let {id}=useParams()
  let navigate = useNavigate()
  let[email,setEmail] = useState("")
  let[password,setPassword] = useState("")

  useEffect(()=>{
    let fetchData=async ()=>{
      let x=await axiosInstance.get(`/userdetails/${id}`)
      console.log(x.data)
      setEmail(x.data.email)
      setPassword(x.data.password)
    }
    fetchData()
  },[])


  let handleUpdate=(e)=>{
    e.preventDefault()
    let payload={email,password}
    let data=axiosInstance.put(`/userdetails/${id}`,payload)
    console.log(data)
    alert("updated successfully")
    navigate("/views")
  }
  return (
   
    <div>
      <h1>this is update form</h1>
    <form action="" onSubmit={handleUpdate}>
      <div>
        <label htmlFor="">email</label>
        <input
          type="text" id='' value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="">password</label>
        <input
          type="text" value={password} id=''
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button>UPDATE</button>
    </form>
  </div>
);
}
export default Update