import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterUser";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import EventForm from "./components/EventForm";

function App() {
  const [token, setToken] = useState("");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage setToken={setToken} />} />
        <Route path="/" element={<Dashboard token={token} />} />
        <Route path="/create-event" element={<EventForm token={token} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
