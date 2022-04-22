import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import queryString from "query-string";
// import io from "socket.io-client";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  // const ENDPOINT = "http://localhost:5000";

  useEffect(() => {
    // const { name, room } = queryString.parse(location.search);
    // socket = io(ENDPOINT);
    setRoom(room);
    setName(name);
  }, [location.search]);

  const [messages, setMessages] = useState([]);
useEffect(() => {
  socket.on("message", (message) => {
    setMessages((messages) => [...messages, message]);
  });
}, []);

const handleSubmit = (e) => {
  e.preventDefault();
  if (message) {
    socket.emit("sendMessage", { message });
    setMessage("");
  } else alert("empty input");
};

return (
  <div>
    {messages.map((val, i) => {
      return (
        <div key={i}>
          {val.text}
          <br />
          {val.user}
        </div>
      );
    })}
  </div>
);
};

export default Chat;