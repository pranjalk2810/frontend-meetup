import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  if (isLoggedIn) {
    return <Dashboard setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div>
      <h1>Meetup Application</h1>

      <button onClick={() => setPage("login")}>Login</button>
      <button onClick={() => setPage("signup")}>Signup</button>

      <hr />

      {page === "login" ? (
        <Login setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Signup setPage={setPage} />
      )}
    </div>
  );
}

export default App;