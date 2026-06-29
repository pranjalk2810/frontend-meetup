import { useEffect, useState } from "react";

function Profile({ setPage }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/api/profile", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Profile</h2>

      <button onClick={() => setPage("dashboard")}>
        Back to Dashboard
      </button>

      <hr />

      {!user ? (
        <p>Loading profile...</p>
      ) : (
        <div>
          <p><b>Name:</b> {user.full_name}</p>
          <p><b>Email:</b> {user.email}</p>
          <p><b>Phone:</b> {user.ph_number}</p>
          <p><b>Role:</b> {user.role}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;