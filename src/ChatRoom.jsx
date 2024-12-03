import { useState, useEffect, Fragment } from "react";
import { createConnection } from "./Chat.jsx";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  const [message, setMessage] = useState("");
  const [chatLog, setChatLog] = useState([]);

  useEffect(() => {
    const options = { serverUrl: serverUrl, roomId: roomId };

    const connection = createConnection(options);
    connection.connect();

    return () => {
      connection.disconnect();
      setChatLog((prevChatLog) => (prevChatLog = []));
    }; //cleanup must return a function (here it's an anonnymous arrow function), not execute it right away! So no: return (connection.disconnect())
  }, [roomId]);

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
  return (
    <>
      <label>
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="fun">fun</option>
          <option value="meetups">meetups</option>
        </select>
      </label>
      <h1>Welcome to the {roomId} room!</h1>
      <ChatRoom roomId={roomId}></ChatRoom>
    </>
  );
}

// function ChatRoom({ roomId }) {
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     const options = {
//       serverUrl: serverUrl,
//       roomId: roomId,
//     };
//     const connection = createConnection(options);
//     connection.connect();
//     return () => connection.disconnect();
//   }, [roomId]);

//   return (
//     <>
//       <h1>Welcome to the {roomId} room!</h1>
//       <input
//         placeholder="Type your message..."
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//       ></input>
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState("general");
//   return (
//     <>
//       <label>
//         Choose the chat room:{" "}
//         <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
//           <option value="general">general</option>
//           <option value="meetups">meetups</option>
//           <option value="fun">fun</option>
//         </select>
//       </label>
//       <hr></hr>
//       <ChatRoom roomId={roomId}></ChatRoom>
//     </>
//   );
// }

// 1. Understand the Problem
// Goal: Create a chat application that allows users to select a chat room and simulate connecting to a server.
// Identify the requirements:
// A way to select chat rooms dynamically.
// Simulate server connection and disconnection when switching rooms.
// Display basic information and an input box for messages.
// 2. Break Down the Requirements
// Core components needed:
// A parent component (App) to manage and pass down selected room state.
// A child component (ChatRoom) to handle room-specific behavior (e.g., connecting/disconnecting).
// Utility functions:
// createConnection to encapsulate the server simulation logic.
// State management:
// Room selection: roomId in the parent.
// Message typing: message in the child.
// 3. Plan the Component Hierarchy
// App:
// Manage roomId state.
// Provide a dropdown for selecting the room.
// Render the ChatRoom component, passing roomId as a prop.
// ChatRoom:
// Manage message state.
// Use useEffect for connection lifecycle management (connect/disconnect).
// Display room details and provide an input for user messages.
// 4. Start with the Skeleton
// Write a basic structure for App and ChatRoom components.
// Set up basic JSX with placeholders.

// 5. Implement State Management
// Identify what state each component needs:
// App needs to track the roomId.
// ChatRoom needs to track message input.
// Use React hooks (useState).

// 6. Add Side Effects (useEffect)
// When does the useEffect need to run?
// When the room changes (roomId dependency).
// What needs to happen?
// Connect to the server when the component mounts or roomId changes.
// Disconnect when the component unmounts or before switching rooms.
// Implement with cleanup.

// 7. Implement Utility Functions
// Create a mock createConnection function to simulate server behavior.
// Encapsulate connection logic and ensure it aligns with useEffect lifecycle.

// 8. Polish the UI
// Add placeholders, labels, and visual enhancements to make the interface user-friendly:
// Dropdown with labeled options.
// Input field for typing messages with a placeholder.

// 9. Test and Debug
// Run the code: Ensure the following behaviors are correct:
// The connection logs the correct room when selected.
// Disconnection logs correctly when switching rooms.
// State updates as expected when typing in the input box.
// Debug any issues (e.g., incorrect cleanup or missing state updates).A

// 10. Refactor and Optimize
// Identify redundancies (e.g., unnecessary props or repeated logic).
// Simplify where possible:
// Directly pass roomId to createConnection.
// Use self-closing tags for input elements.
// Document complex parts with comments.
// 11. Plan for Extensions
// Think about potential improvements:
// Add message sending functionality.
// Use a real server API.
// Display messages in a chat log.

// Summary Thought Process:
// Understand the problem.
// Break it down into small, manageable tasks.
// Plan the component hierarchy and state.
// Write code iteratively, testing each step.
// Polish and refactor for clarity and efficiency.
// Think about scalability and future features.
