import { useState, useEffect, Fragment } from "react";
import { createConnection } from "./Chat.jsx";

function ChatRoom({ roomId, serverUrl }) {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const options = { serverUrl: serverUrl, roomId: roomId };

    const connection = createConnection(options);
    connection.connect();

    return () => {
      connection.disconnect();
      setChatLog([]); //ok?
    }; //cleanup must return a function (here it's an anonnymous arrow function), not execute it right away! So no: return (connection.disconnect())
  }, [roomId, serverUrl]);

  const handleMessage = () => {
    setChatLog((prevChatLog) => [...prevChatLog, message]);
    setMessage("");
  };

  return (
    <>
      <div>
        {chatLog.map((mes, index) => (
          <div key={index}>{mes}</div>
        ))}
      </div>
      <input
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></input>
      <button onClick={handleMessage}>Send</button>
    </>
  );
}

export default function App() {
  const [roomId, setRoomId] = useState("general");
  const [serverUrlInput, setServerUrlInput] = useState("");
  const [activeServerUrl, setActiveServerUrl] = useState("");
  const [isServerSelected, setIsServerSelected] = useState(false);
  const handleServer = () => {
    setActiveServerUrl(serverUrlInput);
    setIsServerSelected(true);
  };

  return (
    <>
      <input
        placeholder="Type server Url..."
        value={serverUrlInput}
        onChange={(e) => setServerUrlInput(e.target.value)}
      ></input>
      <button onClick={handleServer}>Connect to server</button>
      {isServerSelected ? (
        <>
          <label>
            <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
              <option value="general">general</option>
              <option value="fun">fun</option>
              <option value="meetups">meetups</option>
            </select>
          </label>
          <h1>
            Welcome to the {roomId} room at the {activeServerUrl} server!
          </h1>
          <ChatRoom roomId={roomId} serverUrl={activeServerUrl}></ChatRoom>
        </>
      ) : (
        <h1>Welcome to the chatroom!</h1>
      )}
    </>
  );
}
