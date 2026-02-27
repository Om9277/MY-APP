import React, { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const themeStyle = {
    backgroundColor: darkMode ? "#121212" : "#f4f4f4",
    color: darkMode ? "white" : "black",
    height: "100vh",
    textAlign: "center",
    paddingTop: "50px",
    transition: "0.3s",
  };

  return (
    <div style={themeStyle}>
      <h1>My React is Working 🚀</h1>
      <p>Welcome to my React project!</p>

      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          padding: "10px 20px",
          marginTop: "20px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
        }}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </div>
  );
}

export default App;