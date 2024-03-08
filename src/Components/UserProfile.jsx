import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [userColumns, setUserColumns] = useState([]);
  const [record, setRecord] = useState([]);
  // const [addressColumns, setAddressColumns] = useState([]);
  // const [addresses, setAddresses] = useState([]);
  // const [phoneColumns, setPhoneColumns] = useState([]);
  // const [phones, setPhones] = useState([]);
  // const [infoColumns, setInfoColumns] = useState([]);
  // const [info, setInfo] = useState([]);
  const user_id = window.sessionStorage.getItem("user_id");

  useEffect(() => {
    if (!window.sessionStorage.getItem("auth")) navigate("/unauthorized");
    fetch(process.env.REACT_APP_API_URL_BASE + "/users/user/" + user_id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserColumns(Object.keys(data.user));
        setRecord(data.user);
        console.log(record);
        // setInfoColumns(Object.keys(data.info[0]));
        // setInfo(data.info);
        // setAddressColumns(Object.keys(data.addresses[0]));
        // setAddresses(data.addresses);
        // setPhoneColumns(Object.keys(data.phones[0]));
        // setPhones(data.phones);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleLogout = (e) => {
    e.preventDefault();
    window.sessionStorage.removeItem("auth");
    window.sessionStorage.removeItem("user_id");
    window.sessionStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <p>{record.user_name}</p>
      <h2>User</h2>
      <table className="table">
        <thead>
          <tr>
            {userColumns.map((c, i) => (
              <th key={i}>{c.replaceAll("_", " ").toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            <tr>
              <td>{record.user_id}</td>
              <td>{record.user_name}</td>
              <td>{record.email}</td>
              <td class="hidetext">{record.password}</td>
              <td>{record.firstname}</td>
              <td>{record.lastname}</td>
              <td>{record.address}</td>
            </tr>
          }
        </tbody>
      </table>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserProfile;
