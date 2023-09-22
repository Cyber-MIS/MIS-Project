import React, { useState, useEffect } from "react";
//import axios from "axios";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Replace with your API endpoint
      fetch('http://localhost:4000/dashboard/getOrphanageDetails')
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          if (data) 
            {setData(data);}
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false);
        });
    }, []);
  
    return (
      <div className="App">
        <h1>Orphanage Data Table</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Orphanage ID</th>
                <th>Orphanage Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Capacity</th>
                <th>Employee Count</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.Orphanage_ID}>
                  <td>{item.Orphanage_ID}</td>
                  <td>{item['orphanage name']}</td>
                  <td>{item.address}</td>
                  <td>{item.contact}</td>
                  <td>{item.capacity}</td>
                  <td>{item.employee_count}</td>
                  <td>{item.Email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
  

export default App;
