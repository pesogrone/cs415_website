import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    let success = true;
    let errorText = "";
    const payload = JSON.stringify({
      email: email,
      password: pass,
    });
    try {
      fetch("http://localhost:8000/login/", {
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
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
            console.log(errorText);
            setError(errorText);
          } else {
            if (data.success) {
              window.sessionStorage.setItem("auth", true);
              window.sessionStorage.setItem("user_id", data.user_id);
              window.sessionStorage.setItem("token", data.token);
              navigate("/userprofile");
            }
          }
        })
        .catch((error) => {
          success = false;
          console.error(error);
        });
      if (success) {
        setEmail("");
        setPass("");
        setError("Logged In Successfully!");
        //Navigate to User Page
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
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign in</h2>
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
        <button type="submit">Login</button>
        <p className="text-success">
          <b>{error}</b>
        </p>

        <button className="link-btn" onClick={() => navigate("/SignIn")}>
          Don't have an account? Register here.
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
