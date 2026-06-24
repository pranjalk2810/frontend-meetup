function Dashboard({ setIsLoggedIn }) {
  const logout = () => {
    document.cookie = "token=; path=/; max-age=0";
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Meetup Dashboard</h1>

      <button>View Meetups</button>
      <button>Create Meetup</button>
      <button>Subscribed Meetups</button>
      <button>Paid Meetups</button>
      <button>Profile</button>

      <br /><br />

      <button onClick={logout}>Logout</button>

      <hr />

      <h2>Welcome to your Meetup App</h2>
      <p>Select a tab above to continue.</p>
    </div>
  );
}

export default Dashboard;