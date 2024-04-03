import React, { Component } from 'react'
import json from "./user.json"
import "./global.css"
export default class App extends Component {
    constructor(){
        super()
        this.state={
           user_details:json
        }
    }
  render() {
    return (
      <div id='main'>
        {this.state.user_details.map((x)=>{
            return(
                <div id="card">
                  <div><img src={x.img} height={200} /> </div>
                    <h1>{x.name}</h1>
                    <p>{x.age}</p>
                    <p>{x.email}</p>
                    <p>{x.phone}</p>
                    
                </div>
            )
        })}
      </div>
    )
  }
}

// import React, { Component } from 'react'
// import json from "./user.json";

// export default class App extends Component {
//    value=this.json;
//   render() {
//     console.log(this)
//     return (
//       <div id='card'>
//             {this.value.map((x)=>{
//               return (
//                 <div id="card">
//                 <h1>{x.name}</h1>
//                 <h1>{x.age}</h1>
//                 <h1>{x.email}</h1>
//                 </div>
//               )
//             })}
        
//       </div>
//     )
//   }
// }
