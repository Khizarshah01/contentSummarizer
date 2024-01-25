import React, { useState } from "react";
import "./Summarizer.css";
import Text from "./Text";
import Link from "./Link";

function Summarizer() {
  const [mode, setMode] = useState("Text"); // State to track the selected mode

  // Function to handle mode change
  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  return (
    <div>
      <div className="switch-field">
        <input
          type="radio"
          id="radio-one"
          name="switch-one"
          value="Text"
          checked={mode === "Text"}
          onChange={handleModeChange}
        />
        <label htmlFor="radio-one">Text</label>
        <input
          type="radio"
          id="radio-two"
          name="switch-one"
          value="Link"
          checked={mode === "Link"}
          onChange={handleModeChange}
        />
        <label htmlFor="radio-two">Link</label>
      </div>

      {mode === "Text" && <Text />} 
      {mode === "Link" && <Link />}
    </div>
  );
}

export default Summarizer;
