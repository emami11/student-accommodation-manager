import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Connecting to backend...");

  useEffect(() => {
    fetch("http://localhost:5001")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error connecting to backend:", error);
        setMessage("Could not connect to backend");
      });
  }, []);

  return (
    <main>
      <h1>Student Accommodation Manager</h1>
      <p>{message}</p>
    </main>
  );
}

export default App;