import React from "react";
const Register = () => {
  return (
    <div className="register-container">
      <form className="register-form">
        <h1>Register Form</h1>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <div className="gender-options">
            <label htmlFor="male">
              <input type="radio" id="male" name="gender" /> Male
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" /> Female
            </label>
            <label htmlFor="other">
              <input type="radio" id="other" name="gender" /> Other
            </label>
          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
