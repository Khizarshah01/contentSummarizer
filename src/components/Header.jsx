import React from "react";
import "./Header.css";
import github from "../images/github.png";
import fork from "../images/fork.png";

function Header() {
  return (
    <div className="container">
      <div className="diver" id="firsdiver">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Donate</li>
        </ul>
      </div>

      <div className="diver2">
        <label className="switch">
          <input type="checkbox" />
          <span className="slider" />
        </label>

        <img id="fork" src={fork} alt="fork" />
        <img id="github" src={github} alt="github" />
      </div>
    </div>
  );
}

export default Header;
