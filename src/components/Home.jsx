import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [url, setUrl] = useState("");
  const [length, setLength] = useState(5); // initial summary length set to 5
  const [summarizedText, setSummarizedText] = useState("");

  const handleSummarize = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url, length: +length }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSummarizedText(data.summarized_text);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("Response Status:", error.response.status);
        console.log("Response Text:", error.response.statusText);
      });
  };

  return (
    <div className="mainCon">
      <div className="Heading">
        <h1 data-text="+JADU SUMARIZER+" >+JADU SUMARIZER+</h1>
      </div>
        <h2>
          A web app that convert your large amount of text data into short text.
        </h2>
        <h3>NO SINGUP | FREE TO USE | OPEN SOURCE</h3>
      <div className="con">
        <div className="inputBox">
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required="required"
            placeholder="Enter URL"
          />
          <label htmlFor="length" className="Heading2">Summary Length: {length}</label>
          <input
            type="range"
            id="length"
            min="1"
            max="10"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <button onClick={handleSummarize}>Summarize</button>
          <textarea
            id="summarizedText"
            rows="10"
            cols="70"
            value={summarizedText}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Home;