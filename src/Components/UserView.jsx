import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserView = () => {
  const navigate = useNavigate();
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (!window.sessionStorage.getItem("auth")) navigate("/unauthorized");
    fetch(process.env.REACT_APP_API_URL_BASE + "/users")
      .then((res) => res.json())
      .then((data) => {
        setColumns(Object.keys(data.users[0]));
        setRecords(data.users);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <table className="table">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={i}>{c.replaceAll("_", " ").toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {records.map((record, i) => (
            <tr key={i}>
              <td>{record.user_id}</td>
              <td>{record.user_name}</td>
              <td>{record.email}</td>
              <td class="hidetext">{record.password}</td>
              <td>{record.firstname}</td>
              <td>{record.lastname}</td>
              <td>{record.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserView;
