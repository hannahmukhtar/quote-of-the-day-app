import React, { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");

  // Replace this with your actual Render backend URL
  const backendURL = "https://quote-of-the-day-app.onrender.com/api/quote";

  // Function to fetch a random quote from the backend
  const fetchQuote = async () => {
    try {
      const response = await fetch(backendURL);
      const data = await response.json();
      setQuote(data.quote);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to load quote. Please try again later.");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Quote of the Day</h1>
        <p>{quote || "Click the button to get a quote!"}</p>
        <button onClick={fetchQuote} style={{ marginTop: "20px", padding: "10px 20px" }}>
          Get Quote
        </button>
      </header>
    </div>
  );
}

export default App;
