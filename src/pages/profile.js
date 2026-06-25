import { useEffect, useState } from "react";

function Profile({ setPage }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/api/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data.user))
      .catch(() => alert("Could not load profile"));
  }, []);

  return (
    <div>
      <h2>Profile</h2>

      {user ? (
        <div>
          <p><b>User ID:</b> {user.user_id}</p>
          <p><b>Name:</b> {user.full_name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.ph_number}</p>
          <p><b>Role:</b> {user.role}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      <button onClick={() => setPage("dashboard")}>Back</button>
    </div>
  );
}

export default Profile;