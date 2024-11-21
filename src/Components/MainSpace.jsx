import { useState } from "react";
import TextAnalytics from "./TextAnalytics";
import TextArea from "./TextArea";
import { LINKEDIN_REMAINDER, TWITTER_REMAINDER } from "../Constants";

export default function MainSpace() {
  const [text, setText] = useState("");

  const maths = {
    numOfCharacters: text.length,
    linRem: LINKEDIN_REMAINDER - text.length,
    twiRem: TWITTER_REMAINDER - text.length,
    numOfWords: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
  };

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <TextAnalytics maths={maths} />
    </main>
  );
}
