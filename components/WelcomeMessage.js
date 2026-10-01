// Receives name and course through props from the parent page
export default function WelcomeMessage({ studentName, courseName }) {
  const hasName = studentName.trim().length > 0;

  return (
    <div className="card">
      {/* Conditional rendering based on whether a name was submitted */}
      {hasName ? (
        <>
          <h2>Hello, {studentName}!</h2>
          <p>Welcome to the {courseName} assignment.</p>
        </>
      ) : (
        <>
          <h2>Welcome to {courseName}</h2>
          <p>Submit your name in the form below.</p>
        </>
      )}
    </div>
  );
}
