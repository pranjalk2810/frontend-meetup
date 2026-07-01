import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateMeetup() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [meetup_start_date, setStartDate] = useState("");
  const [meetup_end_date, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [meetup_type, setMeetupType] = useState("free");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [max_members, setMaxMembers] = useState("");

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCreateMeetup = async () => {
    setErrorMessage("");
    setSuccessMessage("");

    if (
      !title ||
      !description ||
      !meetup_start_date ||
      !meetup_end_date ||
      !location ||
      !meetup_type ||
      !category ||
      !max_members
    ) {
      setErrorMessage("Please fill all important fields.");
      return;
    }

    if (meetup_type === "paid" && (!price || price <= 0)) {
      setErrorMessage("Please enter price for paid meetup.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/create-meetup", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          meetup_start_date,
          meetup_end_date,
          location,
          meetup_type,
          price: meetup_type === "free" ? 0 : price,
          category,
          max_members,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage("Meetup successfully created.");
        alert("Meetup created successfully");
        navigate("/dashboard");
      } else {
        setErrorMessage(data.message || data.error || "Meetup creation failed.");
      }
    } catch (error) {
      console.log(error);
      setErrorMessage("Backend is not running or API URL is wrong.");
    }
  };

  return (
    <div>
      <h2>Create Meetup</h2>

      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}

      <label>Title</label>
      <input
        type="text"
        placeholder="Meetup Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <label>Description</label>
      <textarea
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <label>Start Date and Time</label>
      <br />
      <input
        type="datetime-local"
        onChange={(e) => setStartDate(e.target.value)}
      />

      <br /><br />

      <label>End Date and Time</label>
      <br />
      <input
        type="datetime-local"
        onChange={(e) => setEndDate(e.target.value)}
      />

      <br /><br />

      <label>Location</label>
      <input
        type="text"
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <br /><br />

      <label>Meetup Type</label>
      <select onChange={(e) => setMeetupType(e.target.value)}>
        <option value="free">Free</option>
        <option value="paid">Paid</option>
      </select>

      <br /><br />

      {meetup_type === "paid" && (
        <>
          <label>Price</label>
          <input
            type="number"
            placeholder="Price"
            onChange={(e) => setPrice(e.target.value)}
          />

          <br /><br />
        </>
      )}

      <label>Category</label>
      <input
        type="text"
        placeholder="Category"
        onChange={(e) => setCategory(e.target.value)}
      />

      <br /><br />

      <label>Max Members</label>
      <input
        type="number"
        placeholder="Max Members"
        onChange={(e) => setMaxMembers(e.target.value)}
      />

      <br /><br />

      <button onClick={handleCreateMeetup}>Create Meetup</button>
      <button onClick={() => navigate("/dashboard")}>Back</button>
    </div>
  );
}

export default CreateMeetup;