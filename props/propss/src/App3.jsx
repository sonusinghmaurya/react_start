import React from "react";
import Grandparent3 from "./props_fbc/Grandparent3.js";
import "./global.css";

const App3 = () => {
  return (
    <div className="root">
      <h2>ROOT COMPONENT</h2>
      <Grandparent3 username="sonu singh " />
    </div>
  );
};

export default App3;
