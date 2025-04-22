import React, { useEffect, useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);

  const getUser = () => {
    fetch("https://weblab-backend-2qxm.onrender.com/api/user") // Replace with actual backend URL
      .then((res) => res.json())
      .then((json) => setUser(json));
  };


  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      {user.map((data, index) => (
        <div key={index} style={{ border: "1px solid gray", width: "500px", marginBottom: "10px" }}>
          <h1>Name: {data.name}</h1>
          <h1>Username: {data.username}</h1>
          <h1>Email: {data.email}</h1>
        </div>
      ))}
    </div>
  );
};

export default App;
