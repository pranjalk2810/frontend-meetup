import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [pwd_hash, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://13.232.108.64:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        pwd_hash,
      }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful");
    } else {
      alert("Login Failed");
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