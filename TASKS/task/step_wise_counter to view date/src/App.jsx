import React, { useState } from 'react'

const App = () => {
    let[step,setStep]=useState(1)
    let[count,setCount]=useState(0)
    let text=new Date()
    text.setDate(text.getDate()+count)
    let handleClickplus=()=>{
      setStep(step+1)
    }
    let handleClickminus=()=>{
      setStep(step-1)
    }
   
  return (
    <>
    <div>
        <span><button onClick={handleClickplus}>+</button></span>
        <span>step:{step}</span>
        <span><button onClick={handleClickminus}>-</button></span>
    </div>
    <div>
    <span><button onClick={()=>{setCount(count+step)}}>+</button></span>
        <span>count:{count}</span>
        <span><button onClick={()=>{setCount(count-step)}}>-</button></span>
    </div>
    <h1>
    <span>{count===0 ? "today is " : count>0 ? `${count} days from today is` : `${Math.abs(count)} days ago was `}</span>
    <span>{text.toDateString()}</span>
    </h1>
    </>
  )
}

export default App