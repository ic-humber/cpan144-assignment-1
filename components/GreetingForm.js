"use client";

import { useState } from "react";

// Owns its own input state, then sends the name up to the parent with a callback prop
export default function GreetingForm({ onSubmitName }) {
  const [nameInput, setNameInput] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading

    const trimmed = nameInput.trim();
    if (trimmed.length < 2) {
      setIsError(true);
      setMessage("Please enter a name with at least 2 characters.");
      return;
    }

    setIsError(false);
    setMessage(`Success: welcome, ${trimmed}!`);
    onSubmitName(trimmed);
  }

  return (
    <div className="card">
      <h2>Enter your name</h2>
      <form className="form-row" onSubmit={handleSubmit}>
        <label htmlFor="student-name">
          Name
          <input
            id="student-name"
            type="text"
            value={nameInput}
            onChange={(event) => setNameInput(event.target.value)}
            placeholder="Enter your name"
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      {message && (
        <p className={isError ? "message-error" : "message-success"}>
          {message}
        </p>
      )}
    </div>
  );
}
