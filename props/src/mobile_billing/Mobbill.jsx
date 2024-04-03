import React from "react";

const Mobbill = (props) => {
  return (
    <div id="prop">
      <h1>BILL AMOUNT</h1>
      <br /><br />
      <h3>mobile: JIO PHONE</h3><br />
      <h3> price: {props.price}</h3><br />
      <h3>qty: {props.qty}</h3><br />
      <h1>TOTAL :₹ {props.price * props.qty}</h1>
    </div>
  );
};

export default Mobbill;
