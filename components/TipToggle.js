"use client";

import { useState } from "react";

export default function TipToggle() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="card">
      <h2>1. Button click event</h2>
      <button type="button" onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {/* Only render the tip when isVisible is true */}
      {isVisible && (
        <p>This message is toggled by the Show / Hide button.</p>
      )}
    </div>
  );
}
