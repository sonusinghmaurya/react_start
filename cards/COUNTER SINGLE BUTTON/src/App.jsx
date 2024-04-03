import React from 'react'
import {useState} from 'react'
const App = () => {
    let[count,setCount]=useState(0)
  return (
    <div>
        <h1>counter app using FBC</h1>
        <h1>{count}</h1>
        <button onClick={()=>{setCount(count+1)}} onMouseOver={()=>{setCount(count-1)}}>update</button>
    </div>
  )
}

export default App