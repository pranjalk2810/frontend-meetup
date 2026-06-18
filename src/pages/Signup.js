import { useState } from "react";

function Signup() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd_hash, setPassword] = useState("");
  const [ph_number, setPhone] = useState("");

  const handleSignup = async () => {
    const response = await fetch("http://13.232.108.64:3000/signup", {
      method: "POST",
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
    alert(JSON.stringify(data));
  };

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