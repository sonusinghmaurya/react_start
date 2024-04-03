import React, { useEffect, useState } from "react";

const Home = (props) => {
  // let [username, setUsername] = useState("");

  // useEffect(() => {
  //   let data = window.localStorage.getItem("username");
  //   setUsername(data);
  // }, []);

  return (
    <div>
      <h1>{props.data.username} has SUCCESSFULLY LOGGED HERE</h1>
    </div>
  );
};

export default Home;



