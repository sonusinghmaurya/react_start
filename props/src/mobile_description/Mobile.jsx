import React, { useState } from "react";
import Mobbill from "../mobile_billing/Mobbill.jsx";
const Mobile = () => {
  let [price, setPrice] = useState(1500);
  let [count, setCount] = useState(1);

  let handleClick = () => {
    if (count > 1) {
      setCount(count - 1);
    } else {
      setCount(1);
    }
  };

  return (
    <div id="big_container">
    <section id="container">
      <div id="leftcontainer">
        <img
          src={"https://www.jio.com/1-compact-design.jpg"}
          alt=""
          height={500}
          width={300}
        />
      </div>
      <article id="rightcontainer">
        <h1>mobile:jio phone</h1> <br />
        <p>
          {" "}
          The Jio Phone has been one of the most anticipated product launches in
          India this year. First announced at Reliance's Annual General Meeting
          earlier this year, it is a 4G and VoLTE enabled feature phone, but the
          main reason for the frenzy around it is that it is effectively free -
          the hardware, at least. Buyers will need to pay Rs. 1,500 as a
          security deposit, but that's refundable after three years if you
          return the phone and meet all the terms and conditions. Reliance
          started accepting pre-bookings for the smartphone in August with
          deliveries promised to begin in September.
        </p>
        <br />
        <h2>price:₹{price}</h2>
        <br />
        <div id="qty">
          <button onClick={handleClick}>-</button>
          {count}
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            +
          </button>
        </div>
      </article>
      
    </section>
    <div id="mob">
        <Mobbill price={price} qty={count} />
      </div>
    </div>
  );
};

export default Mobile;
