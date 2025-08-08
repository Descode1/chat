import { io } from "socket.io-client";
import "./App.css";
import { useState } from "react";
const socket = io("http://localhost:3000");

function App() {
  const [message, setMessage] = useState<string>(" ");
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("chat message", message);
    setMessage("");
  };

  return (
    <>
    <form onSubmit={sendMessage}>
      <input
      placeholder="Send a message"
      type="text"
      value={message}
      onChange={(e)=>setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
    </>
  );
}
export default App;
