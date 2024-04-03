import React from 'react';
import './styles.css'; 

const DashboardPage = ({ loginData }) => {
  return (
    <div className="container">
      <h2>Dashboard Page</h2>
      <p>Welcome, {loginData.username}!</p>
    </div>
  );
};

export default DashboardPage;
