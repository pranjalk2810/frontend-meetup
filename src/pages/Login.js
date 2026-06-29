import { useState } from "react";

function Login({ setIsLoggedIn, setPage }) {
  const [email, setEmail] = useState("");
  const [pwd_hash, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          pwd_hash,
        }),
      });

      if (response.ok) {
        setIsLoggedIn(true);
        setPage("dashboard");
        alert("Login Successful");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Backend not running or API error");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button className="form-button" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;