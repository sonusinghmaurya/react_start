import React, { useContext } from "react";
import { ContextApi } from "./ContextProvider";

const Consumer = () => {
  let data = useContext(ContextApi);
  console.log(data);
  return (
  <div>{data}</div>
  );
};

export default Consumer;
