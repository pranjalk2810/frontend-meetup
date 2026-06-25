function Dashboard({ setIsLoggedIn, setPage }) {
  const logout = () => {
    document.cookie = "token=; path=/; max-age=0";
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Meetup Dashboard</h1>

      <button onClick={() => setPage("viewMeetups")}>View Meetups</button>
      <button onClick={() => setPage("createMeetup")}>Create Meetup</button>
      <button onClick={() => setPage("subscribedMeetups")}>Subscribed Meetups</button>
      <button onClick={() => setPage("paidMeetups")}>Paid Meetups</button>
      <button onClick={() => setPage("profile")}>Profile</button>

      <br /><br />

      <button onClick={logout}>Logout</button>


      <hr />

      <h2>Welcome to your Meetup App</h2>
      <p>Select a tab above to continue.</p>
    </div>
  );
}

export default Dashboard;