import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ text, setText }) {
  const [alertWarning, setAlertWarning] = useState("");

  const textHandler = (e) => {
    let newText = e.target.value;
    if (newText.includes("fuck")) {
      setAlertWarning("No curse word allowed");
      newText = newText.replace("fuck", "");
    } else if (newText.includes("@")) {
      setAlertWarning("No @ symbol allowed");
      newText = newText.replace("@", "");
    } else {
      setAlertWarning("");
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
      {<Warning alertWarning={alertWarning} />}
    </div>
  );
}
