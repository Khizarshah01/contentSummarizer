import React, { useState, useRef, useEffect } from "react";
import "./Home.css";

function Home() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [length, setLength] = useState(5);
  const [summarizedText, setSummarizedText] = useState("");
  const textAreaRef = useRef(null);
  const [loadingDots, setLoadingDots] = useState("");
  const [typingText, setTypingText] = useState("");
  const [activeButton, setActiveButton] = useState("Link"); // State to track active button

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!loading) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        const text = typingText.substring(0, currentIndex);
        const cursor = currentIndex % 2 === 0 ? "|" : " ";
        setSummarizedText(text + cursor);
        currentIndex++;
        if (currentIndex > typingText.length) {
          clearInterval(interval);
        }
      }, 5);
      return () => clearInterval(interval);
    }
  }, [typingText, loading]);

  const handleSummarize = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch("http://localhost:5000/summarize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url: url, length: +length }),
    })
      .then((response) => response.json())
      .then((data) => {
        const text = data.summarized_text;
        setTypingText(text);
        setSummarizedText(text);
      })
      .catch((error) => {
        console.error("Error:", error);
        console.log("Response Status:", error.response.status);
        console.log("Response Text:", error.response.statusText);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const copyToClipboard = () => {
    textAreaRef.current.select();
    document.execCommand('copy');
  };

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    // You can add logic here to perform different actions based on the clicked button
  };

  return (
    <div className="mainCon">
      <div className="head">
        <div className="Heading">
          <h1 data-text="JADU SUMARIZER">JADU SUMARIZER</h1>
        </div>
        <h2>
          A web app that convert your large amount of text data into short text.
        </h2>
        <h3>NO SINGUP  |  FREE TO USE  |  OPEN SOURCE</h3>
      </div>

      <div className="con">
        <div className="Choice">
          <button id="ChoiceR"
            className={activeButton === "Link" ? "active" : ""}
            onClick={() => handleButtonClick("Link")}
          >
            Link
          </button>
          <button
            className={activeButton === "Raw" ? "active" : ""}
            onClick={() => handleButtonClick("Raw")}
          >
            Raw
          </button>
          <button id="ChoiceL"
            className={activeButton === "keyword" ? "active" : ""}
            onClick={() => handleButtonClick("keyword")}
          >
            Keyword
          </button>
        </div>
        <div className="inputBox">
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
            <h3>Length: </h3>
            <input
              type="range"
              id="length"
              min="1"
              max="15"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
        </div>
        <div className="textareaa">
          <textarea
            id="summarizedText"
            rows="10"
            cols="70"
            value={loading ? "Loading." + loadingDots : summarizedText}
            ref={textAreaRef}
            spellCheck={false}
            readOnly
          ></textarea>
          <div id="copyToClipboard-a" className="clipboard icon" onClick={copyToClipboard}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
