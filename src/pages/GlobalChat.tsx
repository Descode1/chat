import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import "./GlobalChat.css";

const socket: Socket = io("http://localhost:3000");

function GlobalChat() {
  const [messages, setMessages] = useState<string[]>([]);
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    const handleMessage = (msg: string) => {
      setMessages((prev) => [...prev, msg]);
    };

    socket.on("chat message", handleMessage);

    return () => {
      socket.off("chat message", handleMessage);
    };
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    const authData = authority();
    if (!authData.isAuthorised) {
      alert("Please log in to send messages");
      return;
    }
    
    if (message.trim()) {
      // Include username with the message
      const messageWithUser = `${authData.username}: ${message}`;
      socket.emit("chat message", messageWithUser);
      setMessage("");
    }
  };

  const authority = (): {
    isAuthorised: boolean;
    username?: string;
    token?: string;
  } => {
    const token = localStorage.getItem("tkn");
    const username = localStorage.getItem("username");
    if (token && username) {
      return {
        isAuthorised: true,
        username,
      };
    }
    return {
      isAuthorised: false,
    };
  };

  return (
    <div className="chat-container">
      {authority().isAuthorised ? (
        <>
          <div className="messages-area">
            {messages.map((msg, index) => (
              <div key={index} className="message">
                {msg}
              </div>
            ))}
          </div>
          <div className="input-area">
            <form onSubmit={sendMessage}>
              <input
                className="message-input"
                placeholder="Send a message"
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button className="send-button" type="submit">
                Send
              </button>
            </form>
          </div>
        </>
      ) : (
        <div className="auth-required">
          <h3>Unauthorised</h3>
          <p>Please log in to access the global chat.</p>
        </div>
      )}
    </div>
  );
}

export default GlobalChat;