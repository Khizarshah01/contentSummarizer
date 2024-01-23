import React from "react";
import "./Home.css";
import summarizer from "../images/acurate.jpg";
function Home() {
  return (
    <div className="mainCon">
      <div className="con" id="secondcon1">
        <div className="dipcom">
          <h1 id="secondTittle1">Welcome to <span className="highlight">
            Jadu Summarizer
            </span>
            </h1>
          <h1 id="secondTittle2">Transform Text <span className="highlight">Complexity
            </span> into <span className="highlight">Simplicity</span>
            </h1>

          <div id="twoSection">
            <div className="buttoncon">
              <h2 id="secondTittle3">
                {" "}
                Summarize Your Way to Elite Excellence.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                modi a quasi! Ad porro, minima modi atque inventore, animi
                excepturi qui autem doloremque natus quam labore, fugit iure
                quia ex.
              </p>



              <div className="btn">
                <button className="button-30" id="summarizerBtn">
                  Summarizer
                </button>
                <button className="button-30" id="downloadBtn">
                  Download
                </button>
              </div>
              </div>


            <div className="downimage">
              <img src={summarizer} alt="summarizer" id="svgImage" />
            </div>
          </div>
        </div>
      </div>

      <div className="con">div2</div>
      <div className="con">div3</div>
      <div className="con">div4</div>
    </div>
  );
}

export default Home;
