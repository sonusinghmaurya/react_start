import React, { useEffect, useRef, useState } from "react";
import "./global.css"
const App = () => {
    const[colour,setColour]=useState("")
    let colref =useRef([])

    useEffect(() => {
        colref.current.map((ref) => {
          ref.style.backgroundColor = colour;
        });
      }, [colour]);

  return (
    <div className="container">
      <div className="input-box">
        <input type="text" placeholder="color name" onChange={(e)=>{setColour(e.target.value)}} />
        <input type="number" placeholder="number 1 to 5" />
      </div>
      <div className="big-box">
        <div id="1" className="box" ref={(x) => (colref.current[0] = x)}></div>
        <div id="2" className="box" ref={(x) => (colref.current[1] = x)}></div>
        <div id="3" className="box" ref={(x) => (colref.current[2] = x)}></div>
        <div id="4" className="box" ref={(x) => (colref.current[3] = x)}></div>
        <div id="5" className="box" ref={(x) => (colref.current[4] = x)}></div>

      </div>
      <h1>{colour}</h1>
    </div>
  );
};

export default App;






// import React, { useEffect, useRef, useState } from "react";
// import "./global.css";

// const App = () => {
//   const [colour, setColour] = useState("");
//   const [selectedBox, setSelectedBox] = useState(0);
//   const colref = useRef([]);

//   useEffect(() => {
//     colref.current.map((ref, index) => {
//       ref.style.backgroundColor = index <= selectedBox ? colour : "";
//     });
//   }, [colour, selectedBox]);

//   const handleChange = (e) => {
//     setColour(e.target.value);
//   };

//   const handleNumberInputChange = (e) => {
//     const selectedNumber = parseInt(e.target.value, 20);
//     if (selectedNumber >= 1 && selectedNumber <= 20) {
//       setSelectedBox(selectedNumber - 1);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="input-box">
//         <input type="text" placeholder="color name" onChange={handleChange} />
//         <input
//           type="number"
//           placeholder="number 1 to 5"
//           min="1"
//           max="5"
//           onChange={handleNumberInputChange}
//         />
//       </div>
//       <div className="big-box">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <div
//             key={index}
//             className="box"
//             ref={(el) => (colref.current[index] = el)}
//           ></div>
//         ))}
//       </div>
//       <h1>{colour}</h1>
//     </div>
//   );
// };

// export default App;
