"use client";

import { useState } from "react";
import WelcomeMessage from "../components/WelcomeMessage";
import GreetingForm from "../components/GreetingForm";

export default function HomePage() {
  // Parent state passed down to WelcomeMessage as a prop
  const [studentName, setStudentName] = useState("");

  return (
    <main>
      <h1>Home</h1>

      <WelcomeMessage studentName={studentName} courseName="CPAN 144" />
      <GreetingForm onSubmitName={setStudentName} />
    </main>
  );
}
