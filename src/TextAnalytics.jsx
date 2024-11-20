export default function TextAnalytics() {
  return (
    <section className="stats">
      <Stats label="word count" />
      <Stats />
      <Stats />
      <Stats />
    </section>
  );
}

function Stats() {
  return <section className="stat"></section>;
}
