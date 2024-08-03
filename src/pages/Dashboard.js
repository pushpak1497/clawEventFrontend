import React, { useState, useEffect } from "react";
import { getEvents } from "../api";
import { Link } from "react-router-dom";

const Dashboard = ({ token }) => {
  console.log(token);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      const response = await getEvents(token);
      console.log(response.data);
      setEvents(response.data.data);
    };
    fetchEvents();
  }, [token]);
  if (!token) {
    return (
      <Link to="/login">
        <p>Please login first to see your events</p>
      </Link>
    );
  }

  return (
    <div>
      <h1>Events Dashboard</h1>
      <Link to="/create-event">
        <p>Goto Event creation page</p>
      </Link>
      {events.map((event) => (
        <div key={event._id}>
          <h2>{event.name}</h2>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p>{event.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
