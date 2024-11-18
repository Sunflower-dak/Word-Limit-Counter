import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [text, setText] = useState("");
  const [alertWarning, setAlertWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState('')

  const textHandler = (e) => {
    let newText = e.target.value;
    if (newText.includes("fuck")) {
      setAlertWarning(true);
      newText = newText.replace("fuck", "");
    } else{
      if (newText.includes("@")) {
        setAlertWarning(true);
        newText = newText.replace("@", "");
    }
    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        placeholder="Write here to know your word count..."
        value={text}
        onChange={textHandler}
      />
      {alertWarning ? <Warning /> : null}
    </div>
  );
}