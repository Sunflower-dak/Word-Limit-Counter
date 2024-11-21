export default function TextAnalytics({ maths }) {
  return (
    <section className="stats">
      <Stats number={maths.numOfWords} words={"WORDS"} />
      <Stats number={maths.numOfCharacters} words={"Characters"} />
      <Stats number={maths.linRem} words={"LinkedIn"} />
      <Stats number={maths.twiRem} words={"Twitter (x)"} />
    </section>
  );
}

function Stats({ words, number }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? `stat__number--limit` : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{words}</h2>
    </section>
  );
}
