// Hover styles are handled in CSS with :hover
export default function HoverCard({ title, description }) {
  return (
    <div className="card">
      <h2>3. Hover interaction</h2>
      <div className="hover-box">
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
    </div>
  );
}
