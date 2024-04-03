//=========================================using non synthetic way==============================
// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//           value :"type something"
//     }
//     console.log("constructor")
//   }
//   componentDidMount() {
//   let btn=document.querySelector("button")
//   btn.addEventListener("click",()=>{this.setState({value : "hello"})})
//   console.log("componentDidMount")
//   }
//   render() {
//     console.log("render")
//     return (
//       <>
//       <h1>{this.state.value}</h1>
//      <button>click</button>
//       </>
//     )
//   }
// }

//==================synthetic way (heading change with input change)=======================

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {value:"type something here"}
//   }
//   handleData=(e)=>{
// this.setState({value:e.target.value})
//       console.log(e)
//   }
//   render() {
//     return (
//       <div>
//       <h1>{this.state.value}</h1>
//       <input type="text" placeholder='write here' onChange={this.handleData}/>
//       </div>
//     )
//   }
// }

//==========non synthetic way (heading change with input change)using java script way=======
// disadvantage write in input box and check

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: "type something here",
//     };
//   }
//   componentDidMount(){
//     let inp=document.querySelector("input");
//     inp.addEventListener("keypress",(e) => {
//       this.setState({value:e.target.value})
//     })
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.value}</h1>
//         <input type="text" placeholder="write here" />
//       </div>
//     );
//   }
// }

//==========componentDidMount runs only one time here we trying to change title but it is in componentDidMount so it run only at once ================

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       count :0
//     }
//   }
//   componentDidMount() {
//     console.log("componentDidMount")
//     document.title=`${this.state.count} click`
//   }
//   render() {
//     return (
//       <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={()=>{
//               this.setState({count:this.state.count+1})
//             }}>click</button>
//       </div>
//     )
//   }
// }

//========to overcome this problem we use componentDidUpdate =================================

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super()
//     this.state = {count :0}
//   }
//   componentDidMount() {
//     console.log("componentDidMount" )
//     document.title=`${this.state.count} clicks`
//   }
//   componentDidUpdate(){
//     console.log("componentDidUpdate")
//     document.title=`${this.state.count} clicks`
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={()=>{
//           this.setState({count:this.state.count+1})
//         }}>click</button>
//       </div>
//     )
//   }
// }

//=========================tasks========================

// import React, { Component } from 'react';
// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       value: 'password',
//       data: false
//     };
//   }
//   handleData = (e) => {
//     this.setState({ value: e.target.value });
//   };
//   handleShowPassword = () => {
//     this.setState(() => ({ data: !this.state.data }));
//   };
//   render() {
//     return (
//       <div>
//         <h1>{this.state.data ? this.state.value : 'type something here'}</h1>
//         <input
//           type={this.state.data ? 'text' : 'password'}
//           placeholder="type password"
//           onChange={this.handleData}
//         />
//         <button onClick={this.handleShowPassword}>
//           {this.state.data ? 'Hide Password' : 'Show Password'}
//         </button>
//       </div>
//     );
//   }
// }
