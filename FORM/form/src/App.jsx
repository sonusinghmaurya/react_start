//javascript way of form

// import React, { Component } from 'react'

// export default class App extends Component {
//   handlesubmit=(e)=>{
//     e.preventDefault()
//    let email= document.getElementById("email").value
//     let password=document.getElementById("pass").value
//     console.log({email,password})
//   }
//   render() {
//     return (
// <div>
//   <form action="">
//     <div>
//     <label htmlFor="">EMAIL</label>
//     <input id='email' type="text" />
//     </div>
//     <div><label htmlFor="">PASSWORD</label>
//     <input id='pass' type="text" />
//     </div>
//     <div>
//         <button onClick={this.handlesubmit}> submit</button>
//     </div>
//   </form>
// </div>
//     )
//   }
// }

//----------------------------------------------------------------CBC--------------------------------------------------------
//-----------------------------------------------uncontrolled form----------------------------------------------------------------
//  import React, { Component, createRef } from 'react'

//  export default class App extends Component {
//   constructor(){
//     super()
//     this.emailRef=createRef()
//     this.passRef=createRef()
//   }
//   handleSubmit=(e)=>{
//     e.preventDefault()
//         let email= this.emailRef.current.value
//         let password= this.passRef.current.value
//         console.log({email,password})
//   }
//    render() {
//      return (
//   <div>
//   <form action="" onSubmit={this.handleSubmit}>
//     <div>
//     <label htmlFor="">EMAIL</label>
//     <input id='email' type="text"  ref={this.emailRef}/>
//     </div>
//     <div><label htmlFor="">PASSWORD</label>
//     <input id='pass' type="text" ref={this.passRef} />
//     </div>
//     <div>
//         <button> submit</button>
//     </div>
//   </form>
// </div>
//      )
//    }
//  }

//================================================================FBC==========================================================
//================================================================uncontrolled form============================================
//==============doubt why email and password is clear while clicking on submit button=======================

// import React, { useRef } from "react";
// const App = () => {
//   let emailRef = useRef();
//   let passRef = useRef();
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     let email = emailRef.current.value;
//     let password = passRef.current.value;
//     console.log({ email, password });
//   };
//   return (
// <div>
//   <form action="" onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="">EMAIL</label>
//       <input id="email" type="text" ref={emailRef} />
//     </div>
//     <div>
//       <label htmlFor="">PASSWORD</label>
//       <input id="pass" type="text" ref={passRef} />
//     </div>
//     <div>
//       <button> submit</button>
//     </div>
//   </form>
// </div>
//   );
// };

// export default App;

//=========================================================CBC================================================================
//========================================================CONTROLLED FORM=================================================

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       usernames: "",
//       passwords: ""
//     }
//   }
//   handleSubmit=(e)=>{
//         e.preventDefault()
//         let email = this.state.usernames
//         let pass = this.state.passwords
//         console.log({email, pass})
//   }
//   render() {
//     return (
//   <div>
//   <form action="" onSubmit={this.handleSubmit}>
//     <div>
//       <label htmlFor="">EMAIL</label>
//       <input id="email" type="text" onChange={(e)=>{this.setState({usernames:e.target.value})}} />
//     </div>
//     <div>
//       <label htmlFor="">PASSWORD</label>
//       <input id="pass" type="text" onChange={(e)=>{this.setState({passwords:e.target.value})}} />
//     </div>
//     <div>
//       <button> submit</button>
//     </div>
//   </form>
// </div>
//     )
//   }
// }

//================================================================FBC===================================================
//================================================================CONTROLLED FORM ========================

// import React, { useState } from 'react'

// const App = () => {
//   let[username,setUsername]=useState("")
//   let[password,setPassword]=useState("")
//   let handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log({username,password})
//   }
//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="">EMAIL</label>
//           <input id="email" type="text" onChange={(e)=>{setUsername(e.target.value)}} />
//         </div>
//         <div>
//           <label htmlFor="">PASSWORD</label>
//           <input id="pass" type="text" onChange={(e)=>{setPassword(e.target.value)}} />
//         </div>
//         <div>
//           <button> submit</button>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default App

//password icon change=============================================================================

// import React, { useEffect, useRef } from "react";
// import { useState } from "react";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

// const App = () => {
//   let [email, setEmail] = useState("");
//   let [username, setUsername] = useState("");
//   let [password, setPassword] = useState("");
//   let emailRef = useRef();
//   let passRef = useRef();
//   let userRef = useRef();

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     if (emailRef.current.value == "") {
//       emailRef.current.style.border = "1px solid red";
//     } else {
//       emailRef.current.style.border = "1px solid black";
//     }
//     if (passRef.current.value == "") {
//       passRef.current.style.border = "1px solid red";
//     } else {
//       passRef.current.style.border = "1px solid black";
//     }
//     if (userRef.current.value == "") {
//       userRef.current.style.border = "1px solid red";
//     } else {
//       userRef.current.style.border = "1px solid black";
//     }
//   };
//   const [state, setState] = useState(false);
//   let handletoggle = () => {
//     setState(!state);
//   };
//   return (
//     <div id="registerform">
//       <form action="" onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="">Username</label>
//           <input
//             type="text"
//             ref={userRef}
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="">Email</label>
//           <input
//             type="text"
//             ref={emailRef}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <div>
//           <label htmlFor="">password</label>
//           <input type={state ? "text" : "password"} ref={passRef} />
//         </div>
//         <div>
//           {state ? (
//             <AiOutlineEyeInvisible onClick={handletoggle} />
//           ) : (
//             <AiOutlineEye onClick={handletoggle} />
//           )}
//         </div>
//         <div>
//           <button>submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;

// import React, { useRef } from "react";
// import { useState } from "react";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import "./global.css";
// import { BrowserRouter,Routes,Route } from "react-router-dom";

// const App = () => {
//   let [email, setEmail] = useState("");
//   let [username, setUsername] = useState("");
//   let [password, setPassword] = useState("");
//   let emailRef = useRef();
//   let passRef = useRef();
//   let userRef = useRef();

//   let handleSubmit = (e) => {
//     e.preventDefault();
//     // Rest of your code...
//   };

//   const [state, setState] = useState(false);
//   let handletoggle = () => {
//     setState(!state);
//   };

//   return (
//     <div id="registerform">
//       <form action="" onSubmit={handleSubmit}>
//         <div className="input-container">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             ref={userRef}
//             onChange={(e) => {
//               setUsername(e.target.value);
//             }}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="email">Email</label>
//           <input
//             type="text"
//             id="email"
//             ref={emailRef}
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <div className="input-container">
//           <label htmlFor="password">Password</label>
//           <div className="password-input">
//             <input type={state ? "text" : "password"} id="password" ref={passRef} />
//             <div className="password-toggle">
//               {state ? (
//                 <AiOutlineEyeInvisible onClick={handletoggle} />
//               ) : (
//                 <AiOutlineEye onClick={handletoggle} />
//               )}
//             </div>
//           </div>
//         </div>
//         <div className="submit-container">
//           <button>Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default App;

//important code

// import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Register from "./Register";
// import Home from "./Home";
// import "./global.css";

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Register data={username}/>} />
//         <Route path="/home" element={<Home />} />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import "./global.css";
import { useState } from "react";

const App = () => {
  const [loginData, setLoginData] = useState("");

  const handleLogin = (data) => {
    setLoginData(data);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register onLogin={handleLogin} />} />
        <Route path="/home" element={<Home data={loginData} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
