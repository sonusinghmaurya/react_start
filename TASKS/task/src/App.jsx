import React, { useState } from 'react'
import './Global.css'
const staticData = [
  {
    id: 1,
    firstName: 'ashish',
    lastName: 'maurya',
    email: 'ashish@gmail.com.com',
    phoneNumber: '9066909266',
  },
  {
    id: 2,
    firstName: 'Rakesh  ',
    lastName: 'Sulakhe',
    email: 'Rakesh@gmail.com',
    phoneNumber: '9113210096',
  },
  {
    id: 3,
    firstName: 'sonu',
    lastName: 'singh',
    email: 'sonu@gmail.com.com',
    phoneNumber: '9066909266',
  }
];
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = staticData.filter(
    (data) =>
      data.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      data.phoneNumber.includes(searchTerm)
  );

  return (
    <div className="App">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <table className="data-table">
        <thead>
          <tr>
            <th>S No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={data.id}>
              <td>{index + 1}</td>
              <td>{data.firstName}</td>
              <td>{data.lastName}</td>
              <td>{data.email}</td>
              <td>{data.phoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App