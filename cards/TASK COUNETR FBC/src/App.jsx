import React,{useState} from 'react'

const App = () => {
    let[count,setCount]=useState(0)
  return (
    <>
    <h1>counter application using FBC</h1>
    <h1>{count}</h1>
    <button onClick={()=>{
        setCount(count+1)
    }}>++++</button>
    <button onClick={()=>{
        setCount(0)
    }}>reset</button>
    <button onClick={()=>{
        setCount(count-1)
    }}>----</button>
    </>
  )
}

export default App