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
      <div className="head">
        <div className="Heading">
          <h1 data-text="+JADU SUMARIZER+">+JADU SUMARIZER+</h1>
        </div>
        <h2>
          A web app that convert your large amount of text data into short text.
        </h2>
        <h3>NO SINGUP | FREE TO USE | OPEN SOURCE</h3>
      </div>

      {/* second container */}
      <div class="con">
        <div class="inputBox">
          <input
            id="Urle"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required="required"
            placeholder="Enter URL"
          />
           <button className="button-36" onClick={handleSummarize}>Summarize</button>

          <div className="scon">
            <input
              type="range"
              id="length"
              min="1"
              max="10"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
           
          </div>
        </div>

        <div class="textareaa">
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
