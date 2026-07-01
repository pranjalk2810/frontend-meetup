import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        credentials: "include",
      });
    } catch (error) {
      console.log("Logout error:", error);
    }

    navigate("/login");
  };

  return (
    <div>
      <h1>Meetup Dashboard</h1>

      <button onClick={() => navigate("/view-meetups")}>View Meetups</button>
      <button onClick={() => navigate("/create-meetup")}>Create Meetup</button>
      <button onClick={() => navigate("/subscribed-meetups")}>Subscribed Meetups</button>
      <button onClick={() => navigate("/paid-meetups")}>Paid meetups</button>
      <button onClick={() => navigate("/profile")}>Profile</button>

      <br /><br />

      <button onClick={logout}>Logout</button>

      <hr />

      <h2>Welcome to your Meetup App</h2>
      <p>Select a tab above to continue.</p>
    </div>
  );
}

export default Dashboard;