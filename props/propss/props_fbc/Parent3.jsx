import React from "react";
import Child3 from "./Child3.jsx";

const Parent3 = (props) => {
  return (
    <div className="Parent">
      <h2>Parent3</h2>
      <Child3 username={props.username} />
    </div>
  );
};

export default Parent3;
