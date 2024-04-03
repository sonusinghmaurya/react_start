import React, { useState } from "react";
import axiosInstance from "../HELPER/axiosInstance.js";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let navigate = useNavigate();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let payload = { email, password };
      let data = axiosInstance.post("/userdetails", payload);
      console.log(data);
      alert("registered successfully");
      navigate("/views");
      // setEmail("");
      // setPassword("");
    } catch (err) {
      console.log("error");
    }
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">email</label>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button>SIGNUP</button>
      </form>
    </div>
  );
};

export default Register;
