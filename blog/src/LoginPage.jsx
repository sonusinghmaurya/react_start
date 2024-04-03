import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; 

const LoginPage = ({onLogin}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginData = {username};
    onLogin(loginData);
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={handleLogin} className="button">Login</button>
    </div>
  );
};

export default LoginPage;
