import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
function Dummydata() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        // Once the data is fetched, set it in the state
        setUsers(response.data.users);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div class="bg-dark text-light">
      <p>Dummy Data</p>
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Profile Pic</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Gender</th>
            <th>E-mail</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP ADDRESS</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>
                  <img
                    src={user.image}
                    alt={`Profile of ${user.firstName} ${user.lastName}`}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dummydata;
