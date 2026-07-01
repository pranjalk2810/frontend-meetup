import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ViewMeetups() {
  const navigate = useNavigate();
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/meetups", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMeetups(data))
      .catch((err) => console.log(err));
  }, []);

  const subscribeMeetup = async (meetup_id) => {
    const response = await fetch("http://localhost:8000/api/subscribe-meetup", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ meetup_id }),
    });

    const data = await response.json();

    if (response.ok) {
      alert("Subscribed successfully");
    } else {
      alert(data.message || "Subscription failed");
    }
  };

  return (
    <div>
      <h2>All Meetups</h2>

      <button onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>

      <hr />

      {meetups.length === 0 ? (
        <p>No meetups found.</p>
      ) : (
        meetups.map((meetup) => (
          <div key={meetup.meetup_id} className="card">
            <h3>{meetup.title}</h3>

            <p><b>Description:</b> {meetup.description}</p>
            <p><b>Location:</b> {meetup.location}</p>
            <p><b>Start:</b> {meetup.meetup_start_date}</p>
            <p><b>End:</b> {meetup.meetup_end_date}</p>
            <p><b>Type:</b> {meetup.meetup_type}</p>
            <p><b>Price:</b> ₹{meetup.price}</p>
            <p><b>Category:</b> {meetup.category}</p>
            <p><b>Max Members:</b> {meetup.max_members}</p>

            <button onClick={() => subscribeMeetup(meetup.meetup_id)}>
              Subscribe
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ViewMeetups;