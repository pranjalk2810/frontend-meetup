import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

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
        body: JSON.stringify({ email, pwd_hash }),
      });

      if (response.ok) {
        alert("Login Successful");
        navigate("/dashboard");
      } else {
        alert("Login Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Backend not running or API error");
    }
  };

return (
  <div>
    <h1 style={{ textAlign: "center" }}>Welcome to Meetup</h1>

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

      <br /><br />

      <p style={{ textAlign: "center" }}>
        New to Meetup?{" "}
        <span
          onClick={() => navigate("/signup")}
          style={{
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
            fontWeight: "bold"
          }}
        >
          Sign up here
        </span>
      </p>

    </div>
  </div>
);
}

export default Login;