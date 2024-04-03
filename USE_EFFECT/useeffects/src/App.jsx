// import React, { useEffect } from 'react'

// const App = () => {
//     useEffect(() =>{
//         console.log("this is use effect hook")
//     },[])
//     console.log("hello")
//   return (
//     <>
//     <div>
//         <h1>this is app comp</h1>
//     </div>
//     </>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {
//     let[count,setCount]=useState(0)
//     useEffect(()=>{
//         console.log("this is useEffect ")
//     },[count])

//   return (
//     <div>
//         <h1>count  {count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>click</button>
//     </div>
//   )
// }

// export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {
//     let[count,setCount]=useState(0)
//     useEffect(()=>{
//         document.title=`${count} click`
//         console.log("useeffect")
//     },[])

//   return (
//     <div>
//         <h1>click  {count}</h1>
//         <button onClick={()=>{setCount(count+1)}}>click</button>
//     </div>
//   )
// }

// export default App


import React, { useEffect, useState } from 'react'

const App = () => {
    let[count,setCount]=useState(0)
    useEffect(()=>{
        document.title=`${count} click`
        console.log("useeffect")
    },[count])

  return (
    <div>
        <h1>click  {count}</h1>
        <button onClick={()=>{setCount(count+1)}}>click</button>
    </div>
  )
}

export default App



// import React, { useEffect, useState } from 'react'

// const App = () => {
//     let[width,setWidth] =useState(window.innerWidth)
//     useEffect(()=>{
//         window.addEventListener('resize',()=>{
//             setWidth(window.innerWidth)
//         })
//     },[width])
//   return (
//     <div>
//         <h1>{width}</h1>
//     </div>
//   )
// }

// export default App

