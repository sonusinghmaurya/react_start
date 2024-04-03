// import React, { useEffect, useState } from 'react'

// const App = () => {
//     let[users,setUsers]=useState([])
//     useEffect(() =>{
//      let data= window.fetch("https://api.github.com/users")
//         .then((x)=>x.json()).then((y)=>{setUsers(y)})
//         console.log(data)
//     },[])
//   return (
//     <div>
//         <h1>user details</h1>
//         {users.map((x,i)=>{
//             return(

//                 <div key={i}>
//                 <img src={x.avatar_url} height={200} width={200} />
//                 </div>

//             )
//             })}
//     </div>
//   )
// }

// export default App

import React, { useEffect, useState } from "react";
import "./global.css"

const App = () => {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    let fetchdata = async () => {
      let data = await window.fetch("https://api.github.com/users");
      let finaldata = await data.json();
      setUsers(finaldata);
    };
    fetchdata();
  }, []);
  return (
    <>
      <h1>user details</h1>
    <div id="main">
      {users.map((x, i) => {
        return (
          <div id="card">
          <div key={i}>
            <img src={x.avatar_url} alt="" height={200} width={200} />
            <h3>
              {x.id}: {x.login}
            </h3>
          </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default App;

// using CBC  then and catch============================================================================================================

// import React, { Component } from "react";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [],
//     };
//   }
//   componentDidMount() {
//     let data = window
//       .fetch("https://api.github.com/users")
//       .then((x) => x.json())
//       .then((y) => {
//         this.setState({users:y});
//       });
//     console.log(data);
//   }
//   render() {
//     return (
//       <div>
//         <h1>user detail</h1>
//         {this.state.users.map((x, i) => {
//           return (
//             <div key={i}>
//               <img src={x.avatar_url} alt="" height={200} width={200} />
//               <h3>
//                 {x.id}: {x.login}
//               </h3>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }


