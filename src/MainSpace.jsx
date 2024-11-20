import { useState } from "react";
import TextAnalytics from "./TextAnalytics";
import TextArea from "./TextArea";

export default function MainSpace() {
  const [text, setText] = useState("");

  const maths = {
    numOfCharacters: text.length,
    linRem: 3000 - text.length,
    twiRem: 280 - text.length,
    numOfWords: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <TextAnalytics maths={maths} />
    </main>
  );
}
