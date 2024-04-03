import React from "react";
import Parent3 from "./Parent3.jsx";
const Grandparent3 = (props) => {
  return (
    <div className="grandparent">
      <h2>Grandparent3</h2>
      <Parent3 username={props.username} />
    </div>
  );
};

export default Grandparent3;
