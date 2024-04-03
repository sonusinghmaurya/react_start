//date 1-aug-2023 
//ref`s using javascript
// target the tag using javascript way

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "sonu",
//     };
//   }
//   handleClick = () => {
//     let tagname = document.querySelector("h1");
//     console.log(tagname);
//   };
//   render() {
//     return (
//       <div>
//         <h1>this.state.name</h1>
//         <button onClick={this.handleClick}>click</button>
//       </div>
//     );
//   }
// }

//=======================================================================================================================
// target the tag using react way (useRef())
//In class based component refs is created by creatRef()

// import React, { Component } from 'react'
// import { createRef } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             name:"sonu"
//         }
//         this.h1Ref=createRef()
//     }
//     handleclick=()=>{
//             console.log(this.h1Ref.current)
//     }

//   render() {
//     return (
//       <div>
//         <h1 ref={this.h1Ref}>{this.state.name}</h1>
//         <button onClick={this.handleclick}>click</button>
//       </div>
//     )
//   }
// }

//change the style of text color and background color

// import React, { Component, createRef } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state = {
//             name: 'sonu'
//         }
//         this.h1Ref = createRef()
//     }
//     handleclick=()=>{
//         this.h1Ref.current.style.color = 'red'
//         this.h1Ref.current.style.backgroundColor = 'pink'
//     }
//   render() {
//     return (
//       <div>
//         <h1 ref={this.h1Ref}>{this.state.name}</h1>
//         <button onClick={this.handleclick}>click</button>
//       </div>
//     )
//   }
// }

// change the style of image {border radius 50%}

// import React, { Component, createRef } from "react";
// import image from "./nature.jpg";
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: true,
//     };
//     this.imgRef = createRef();
//   }
//   handleclick = () => {
//     if (this.state.value) {
//       this.imgRef.current.style.borderRadius = "50%";
//     } else {
//       this.imgRef.current.style.borderRadius = "0%";
//     }
//     this.setState({ value:!this.state.value });
//   };
//   render() {
//     return (
//       <div>
//         <img src={image} ref={this.imgRef} />
//         <button onClick={this.handleclick}>click</button>
//       </div>
//     );
//   }
// }


//FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC

//using refs in FBC (useref)

// import React, { useRef ,useState} from 'react'

// const App = () => {
//     let[name,setName]=useState("sonu")
//     let h1Ref=useRef()
//     const handleclick = () => {
//         console.log(h1Ref.current)
//     }
//   return (
//     <div>
//         <h1 ref={h1Ref}>{name}</h1>
//         <button onClick={handleclick}>click</button>
//     </div>
//   )
// }

// export default App

//================================================================================================================================
//FBC change style color background 

// import React from 'react'
// import { useRef } from 'react'
// import { useState } from 'react'

// const App = () => {
//     let[name,setName] =useState("sonu")
//     let h1ref=useRef()
//     let handleclick=()=>{
//         h1ref.current.style.color="red"
//         h1ref.current.style.backgroundColor="pink"
//     }

//   return (
//     <div>
//         <h1 ref={h1ref}>{name}</h1>
//         <button onClick={handleclick}>click</button>
//     </div>
//   )
// }
// export default App

//=====================================================================================================================
//FBC change style of image border radius


// import React, { useRef } from 'react'
// import { useState } from 'react'
// import image from "./nature.jpg"
// const App = () => {
//     let imgRef=useRef()
//     let handleclick=() => {
//         imgRef.current.style.borderRadius="50%"
//     }
//   return (
//     <div>
//         <img src={image} ref={imgRef} width={300} />
//         <button onClick={handleclick}>click</button>
//     </div>
//   )
// }

// export default App


//toggle the upper code with single button using useref()

// import React, { useRef, useState } from 'react'
// import image from "./nature.jpg"

// const App = () => {
//     let[status,setStatus]=useState(true)
//     let imgRef=useRef()
//     let handleclick=()=>{
//         if(status){
//             imgRef.current.style.borderRadius="50%"
//         }
//         else{
//             imgRef.current.style.borderRadius="0%"
//         }
//         setStatus((status)=>!status)
//     }

//   return (
//     <div>
//         <img src={image} ref={imgRef} />
//         <button onClick={handleclick}>click</button>
//     </div>
//   )
// }

// export default App

//============================================================================================================================

//video play pause on video itself without control tag

import React, { useRef } from 'react'
import { useState } from 'react'
import video from "./vid.mp4"

const App = () => {
    let[status,setStatus]=useState(true)
    let videoRef=useRef()

    let handleclick=()=>{
        if(status){
            videoRef.current.play()
        }
        else{
            videoRef.current.pause()
        }
        setStatus(!status)
        console.log(status)
    }
    

  return (
    <div>
        <video src={video} ref={videoRef} onClick={handleclick} width={500}></video>
    </div>
  )
}

export default App