import { useState, useEffect } from "react";
import "./App.css";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import CreateMeetup from "./pages/createMeetup";
import Profile from "./pages/profile";
import ViewMeetups from "./pages/viewMeetups";
import SubscribedMeetups from "./pages/subscribedMeetups";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/api/check-auth", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => {
        if (res.ok) {
          setIsLoggedIn(true);
          setPage("dashboard");
        } else {
          setIsLoggedIn(false);
          setPage("login");
        }
      })
      .catch(() => {
        setIsLoggedIn(false);
        setPage("login");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const logout = async () => {
  try {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.log("Logout error:", error);
  }

  setIsLoggedIn(false);
  setPage("login");
};

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (isLoggedIn) {
    if (page === "createMeetup") {
      return <CreateMeetup setPage={setPage} />;
    }

    if (page === "profile") {
      return <Profile setPage={setPage} />;
    }

    if (page === "viewMeetups") {
      return <ViewMeetups setPage={setPage} />;
    }

    if (page === "subscribedMeetups") {
      return <SubscribedMeetups setPage={setPage} />;
    }

    return (
      <Dashboard
        setPage={setPage}
        logout={logout}
      />
    );
  }

  return (
    <div>
      <h1>Meetup Application</h1>

      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("signup")}>Signup</button>

      <hr />

      {page === "login" ? (
        <Login setIsLoggedIn={setIsLoggedIn} setPage={setPage} />
      ) : (
        <Signup setIsLoggedIn={setIsLoggedIn} setPage={setPage} />
      )}
    </div>
  );
}

export default App;