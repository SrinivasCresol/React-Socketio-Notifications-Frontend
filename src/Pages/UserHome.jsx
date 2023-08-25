import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:4000");

export default function Home() {
  const navigate = useNavigate();

  const handleAction = (action) => {
    socket.emit("userAction", action); // Emit the action to the server
  };

  const logoutUser = () => {
    sessionStorage.removeItem("userToken");
    navigate("/");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("userToken");

    if (token) {
      navigate("/user");
    } else {
      navigate("/");
    }
  }, [handleAction]);

  return (
    <div>
      <h1>Hello From User Page</h1>
      <button onClick={() => handleAction("Action 1")}>Action 1</button>
      <button onClick={() => handleAction("Action 2")}>Action 2</button>
      <button onClick={logoutUser}>Logout</button>
    </div>
  );
}
