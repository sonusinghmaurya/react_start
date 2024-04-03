import React, { useRef, useState } from "react";
import "./global.css";
const App = () => {
  let emails = useRef();

  const inputText = useRef(null);
  const roleText = useRef("");
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");
  let [cofpass, setCofpass] = useState("");
  let [role, setRole] = useState("");
  let [error, setError] = useState("");
  let [match, setMatch] = useState("");
  let [roleerror, setRoleerror] = useState("");
  let [check, setCheck] = useState(false);

  let handlesubmit = (e) => {
    e.preventDefault();

    if (inputText.current.value.match(/^\w+([.-]?\w+)*@gmail.com$/)) {
      setError("Valid email address");
    } else {
      setError("Invalid email address");
    }

    if (pass === cofpass && pass.length > 0) {
      setMatch("Valid Passwords");
    } else {
      setMatch("Invalid Passwords");
    }

    if (
      roleText.current.value.toLowerCase() === "developer" ||
      roleText.current.value.toLowerCase() === "tester"
    ) {
      setRoleerror("Valid role");
    } else {
      setRoleerror("Invalid role");
    }
    if (
      inputText.current.value.match(/^\w+([.-]?\w+)*@gmail.com$/) &&
      pass === cofpass &&
      pass.length > 0 &&
      (roleText.current.value.toLowerCase() === "developer" ||
        roleText.current.value.toLowerCase() === "tester")
    ) {
      console.log({ username, pass, email, role });
    }
  };

  let handlechange = (e) => {
    setEmail(e.target.value);
  };
  return (
    <div className="container">
      <form action="" onSubmit={handlesubmit}>
        <h1>REGISTER</h1>
        <div className="ui form">
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <p></p>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              ref={inputText}
              name="Email"
              placeholder="Email"
              onChange={handlechange}
              style={{ backgroundcolor: check ? "green" : "red" }}
            />
          </div>
          <p style={{ color: error.includes("Valid") ? "green" : "red" }}>
            {error}
          </p>

          <div className="field">
            <label>Password</label>
            <input
              type="password"
              name="Password"
              placeholder="Password"
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <p></p>
          <div className="field">
            <label>Confirm Password</label>
            <input
              type="text"
              name="Confirm Password"
              placeholder="Confirm Password"
              onChange={(e) => {
                setCofpass(e.target.value);
              }}
            />
          </div>
          <p style={{ color: match.includes("Valid") ? "green" : "red" }}>
            {match}
          </p>
          <div className="field">
            <label>Role</label>
            <input
              type="text"
              ref={roleText}
              name="Confirm Password"
              placeholder="Developer/Tester"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            />
          </div>
          <p style={{ color: roleerror.includes("Valid") ? "green" : "red" }}>
            {roleerror}
          </p>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default App;
