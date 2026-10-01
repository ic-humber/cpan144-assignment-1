"use client";

import { useState } from "react";

export default function FeedbackForm() {
  const [feedback, setFeedback] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    const trimmed = feedback.trim();
    if (trimmed.length < 10) {
      setIsError(true);
      setMessage("Feedback must be at least 10 characters long.");
      return;
    }

    setIsError(false);
    setMessage("Success: feedback submitted.");
    setFeedback("");
  }

  return (
    <div className="card">
      <h2>2. Form submission</h2>
      <form className="form-stack" onSubmit={handleSubmit}>
        <label className="stack-label" htmlFor="feedback">
          Feedback
          <textarea
            id="feedback"
            rows={3}
            value={feedback}
            onChange={(event) => setFeedback(event.target.value)}
            placeholder="Enter feedback"
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
