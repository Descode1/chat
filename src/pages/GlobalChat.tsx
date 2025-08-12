import { useState } from "react";
import { io } from "socket.io-client";

function GlobalChat() {
  const [messages, setMessages] = useState<string[]>([]);
  
  const socket = io("http://localhost:3000");
  
  socket.on("chat message", (msg: string) => {
    setMessages((prevMessages: string[]) => [...prevMessages, msg]);
  });

  return (
    <div>
      <div
        style={{
          border: "1px solid #ccc",
          height: "300px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {messages.map((msg: string, index: number) => (
          <div key={index} style={{ marginBottom: "5px" }}>
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GlobalChat;