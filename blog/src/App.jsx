import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState(null);

  const handleLogin = (data) => {
    setLoggedIn(true);
    setLoginData(data);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={!loggedIn ? <LoginPage onLogin={handleLogin} /> : <DashboardPage loginData={loginData} />} />
        <Route path="/dashboard" element={loggedIn ? <DashboardPage loginData={loginData} /> : <LoginPage onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
