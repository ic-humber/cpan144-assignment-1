import TipToggle from "../../components/TipToggle";
import FeedbackForm from "../../components/FeedbackForm";
import HoverCard from "../../components/HoverCard";

export default function PracticePage() {
  return (
    <main>
      <h1>Practice</h1>

      <TipToggle />
      <FeedbackForm />
      <HoverCard
        title="Hover over this box"
        description="The background and text color change on hover."
      />
    </main>
  );
}
