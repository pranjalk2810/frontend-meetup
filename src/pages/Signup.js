import { useState } from "react";

function Signup({ setIsLoggedIn, setPage }) {  
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd_hash, setPassword] = useState("");
  const [ph_number, setPhone] = useState("");

  const handleSignup = async () => {
    const response = await fetch("http://localhost:8000/api/signup", {     //port changed to 8000 from 3000 || LOCALHOST is important 
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name,
        email,
        pwd_hash,
        ph_number,
        role: "user",
      }),
    });

    const data = await response.json();
    if (response.ok) {
      alert("Signup Successful! Please login.");
      setIsLoggedIn(true);
      setPage("dashboard");
    } else {
            alert("Signup failed: "+ JSON.stringify(data));
  } };

  return (
    <div className="container">
      <h2>Signup</h2>

      <input
        type="text"
        placeholder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />
      <br /><br />

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

      <input
        type="text"
        placeholder="Phone Number"
        onChange={(e) => setPhone(e.target.value)}
      />
      <br /><br />
      <button className="form-button" onClick={handleSignup}>
        Signup
      </button>
    </div>
  );
}

export default Signup;
