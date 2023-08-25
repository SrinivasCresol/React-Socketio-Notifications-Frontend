import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:4000");

export default function AdminHome() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    socket.on("adminNotification", (notification) => {
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        notification,
      ]);
    });
  }, []);
  const navigate = useNavigate();

  const logoutAdmin = () => {
    sessionStorage.removeItem("adminToken");
    navigate("/");
  };

  useEffect(() => {
    const token = sessionStorage.getItem("adminToken");

    if (token) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <h1>Hello from Admin Page</h1>
      <h2>Notifications:</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>{notification}</li>
        ))}
      </ul>
      <button onClick={logoutAdmin}>Logout</button>
    </div>
  );
}
