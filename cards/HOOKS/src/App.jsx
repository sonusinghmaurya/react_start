// import React from 'react'
// import {useState} from 'react'
// const App = () => {
//     let[name,setName]=useState("sonu")
//     let[age,setAge]=useState(25)
//     let[phone,setPhone]=useState(9876543210)
     
//     let handleChange=() => {
//         setName("maurya")
//         setAge(26)
//         setPhone("01234598767789")
//     }

//   return (
//     <div>
//         <h1>{name}</h1>
//         <h1>{age}</h1>
//         <h1>{phone}</h1>
//         <button onClick={handleChange}>update</button>
//     </div>
//   )
// }

// export default App

//========================================function onclick============================================

import React from 'react'
import {useState} from 'react'
const App = () => {
    let[name,setName]=useState("sonu")
    let[age,setAge]=useState(25)
    let[phone,setPhone]=useState(9876543210)
     
    

  return (
    <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
        <h1>{phone}</h1>
        <button onClick={()=>{
        setName("maurya")
        setAge(26)
        setPhone("01234598767789")
    }}>update</button>
    </div>
  )
}

export default App