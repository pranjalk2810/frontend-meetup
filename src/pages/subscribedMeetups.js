import { useEffect, useState } from "react";

function SubscribedMeetups({ setPage }) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/my-subscriptions", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setMeetups(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>My Subscribed Meetups</h2>

      <button onClick={() => setPage("dashboard")}>
        Back to Dashboard
      </button>

      <hr />

      {meetups.length === 0 ? (
        <p>You have not subscribed to any meetups yet.</p>
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
          </div>
        ))
      )}
    </div>
  );
}

export default SubscribedMeetups;