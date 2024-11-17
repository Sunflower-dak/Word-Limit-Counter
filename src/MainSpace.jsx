import TextAnalytics from "./TextAnalytics";
import TextArea from "./TextArea";

export default function MainSpace() {
  return (
    <main className="container">
      <TextArea />
      <TextAnalytics />
    </main>
  );
}
