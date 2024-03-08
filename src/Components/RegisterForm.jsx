import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const RegisterForm = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    let success = true;
    let errorText = "";
    const payload = JSON.stringify({
      firstname: firstName,
      lastname: lastName,
      user_name: email,
      email: email,
      password: pass,
      address: address,
    });
    try {
      fetch(process.env.REACT_APP_API_URL_BASE + "/users/", {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            errorText = "Error: " + res.status + " - ";
            success = false;
            return res.json();
          } else {
            success = true;
            return res.json();
          }
        })
        .then((data) => {
          if (!success) {
            for (const err in data.errors) {
              for (const msg in data.errors[err])
                errorText += data.errors[err][msg];
            }
            //log the error to the console and show what is missing, be specific
            console.log(errorText + " - " + JSON.stringify(data.errors));

            setError(errorText);
          }
        })
        .catch((error) => {
          success = false;
          console.error(error);
        });
      if (success) {
        setEmail("");
        setFirstName("");
        setLastName("");
        setPass("");
        setAddress("");
        setError("Registered Successfully!");
      } else {
        setError(errorText);
      }
    } catch (error) {
      console.error(error);
      setError("Error Registering - Check your information and try again");
    }
  };

  return (
    <div className="Login-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="firstName">First Name</label>
        <input
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          id="firstName"
          name="firstName"
        />
        <label htmlFor="lastName">Last Name</label>
        <input
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          id="lastName"
          name="lastName"
        />
        <label htmlFor="email">Email</label>
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email@email.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          required
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <label htmlFor="address">Adress</label>
        <input
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          type="text"
          placeholder="1234 Main St"
          id="address"
          name="address"
        />
        <button type="submit">Register</button>
        <p className="text-success">
          <b>{error}</b>
        </p>
        <button className="link-btn" onClick={() => navigate("/login")}>
          Already have an account? Login here.
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
