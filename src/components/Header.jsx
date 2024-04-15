import React, { useState } from "react";
import "./Header.css";
import githubLight from "../images/github.png";
import githubDark from "../images/githubB.png";
import forkLight from "../images/fork.png";
import forkDark from "../images/forkB.png";
import { NavLink } from "react-router-dom";

function Header() {
  const [githubLogo, setGithubLogo] = useState(githubLight);
  const [forkLogo, setForkLogo] = useState(forkLight);

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    setGithubLogo(githubDark);
    setForkLogo(forkDark);
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    setGithubLogo(githubLight);
    setForkLogo(forkLight);
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  return (
    <div className="container">
      <div className="diver" id="firstdiver">
        <ul>
          <li>
            <NavLink exact="true" to="/" id="yo">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/about" id="yo">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact="true" to="/donate" id="yo">
              Donate
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="diver2">
        <label className="switch">
          <input type="checkbox" onChange={toggleTheme} />
          <span className="slider" />
        </label>

        <img
          id="fork"
          src={forkLogo}
          alt="fork"
          onClick={() =>
            window.open("https://github.com/Khizarshah01/contentSummarizer/fork")
          }
        />
        <img
          id="github"
          src={githubLogo}
          alt="github"
          onClick={() =>
            window.open("https://github.com/Khizarshah01/contentSummarizer")
          }
        />
      </div>
    </div>
  );
}

export default Header;
