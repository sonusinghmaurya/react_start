// import React, { useState } from "react";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [IncDec, setIncDec] = useState(true);
//   const [Timer, setTimer] = useState(null);

//   const handleButtonClick = () => {
//     clearTimeout(Timer);
//     setCounter((count) => count + (IncDec ? 1 : -1))
//     setTimer(setTimeout(() => {setIncDec((x) => !x)}, 1000));

//   };
//   return (
//     <div className="container">
//       <h1>Counter App</h1>
//       <div className="counter-display">
//         <h1>{counter}</h1>
//       </div>
//       <button onClick={handleButtonClick}>toggle</button>
//     </div>
//   );
// }

// export default App;


//first task===============================================================================================================

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let[count,setCount]=useState(0)

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>{setCount(count+1)}}>increment</button>
//       <button onClick={()=>{setCount(count-1)}}>decrement</button>
//       <button onClick={()=>{setCount(0)}}>reset</button>
//     </div>
//   )
// }

// export default App


//task2===========================================================================================================================

// import React, { Component } from 'react'
// import Child from './Child'
// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <Child student={{name:"sonu",age:"25",married:true}}/>
//       </div>
//     )
//   }
// }


//task3====================================================================================================================

// import React, { Component } from 'react'
// import json from "./user.json"
// import "./global.css"
// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={
//            user_details:json
//         }
//     }
//   render() {
//     return (
//       <div id='main'>
//         {this.state.user_details.map((x)=>{
//             return(
//                 <div id="card">
//                   <div><img src={x.img} height={200} /> </div>
//                     <h1>{x.name}</h1>
//                     <p>{x.age}</p>
//                     <p>{x.email}</p>
//                     <p>{x.phone}</p>
                    
//                 </div>
//             )
//         })}
//       </div>
//     )
//   }
// }

//task router====================================================================================================================
// import React from 'react'
// import Navbar from './component/Navbar'
// import { BrowserRouter,Routes,Route } from 'react-router-dom'
// import Home from './component_router/Home'
// import About from './component_router/About'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//       <Navbar/>
//         <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/about' element={<About/>}/>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

import React, { useState } from 'react'


const App = () => {
  let[name,setName]=useState("react js")
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={()=>{setName("java script")}}> change </button>
    </div>
  )
}
export default App

