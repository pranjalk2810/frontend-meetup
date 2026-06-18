import { useState } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
function App() {
  const [page, setPage] = useState("login");
  return (
    <div>
      <h1>Meetup Application</h1>
      <button onClick={() => setPage("login")}>
        Login
      </button>
      <button onClick={() => setPage("signup")}>
        Signup
      </button>
      <hr />
      {page === "login" ? <Login /> : <Signup />}
    </div>
  );
}
export default App;