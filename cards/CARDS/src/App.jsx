// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             subject:"JAVASCRIPT"
//         }
//     }
//         handleChange=()=>{
//             this.setState({subject:"REACT-JS"})
//         }
    
//   render() {
//     return (
//       <div>
//         <h1>{this.state.subject}</h1>
//         <button onClick={this.handleChange} >change</button>
//       </div>
//     )
//   }
// }


//========================================multiple data update========================================

// import React, { Component } from 'react'

// export default class App extends Component {
//     constructor(){
//         super()
//         this.state={
//             name:"sonu",
//             age :25,
//             subject:"JAVA",
//             company: "info"

//         }
//     }
//         handleChange=()=>{
//             this.setState({subject  :"REACT-JS",company:"INFOSYS"})
//         }
    
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.age}</h1>
//         <h1>{this.state.subject}</h1>
//         <h1>{this.state.company}</h1>
//         <button onClick={this.handleChange} >change</button>
//       </div>
//     )
//   }
// }