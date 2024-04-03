import React,{useState} from 'react'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    let[userid,setUserid]=useState("");
    let[pass,setPass]=useState("")

    let handleLogin = () => {
        let email =prompt("ENTER EMAIL")
        let password =prompt("ENTER PASSWORD")

        setUserid(email)
        setPass(password)
        toast.success("REGISTERED SUCCESSFULLY",{position: "top-center"})
    }

    let handleClick=()=>{
      let user = prompt("enter email")
      let pass1 = prompt("enter password")

      if(user===userid && pass1===pass)
      {
        toast.success("login successfull",{position: "top-center"})
      }
      else{
        toast.error("login failed",{position: "top-center"})
      }
    }
  return (
    <div>
        <ToastContainer/>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleClick}>VERIFY</button>
    </div>
  )
}

export default App